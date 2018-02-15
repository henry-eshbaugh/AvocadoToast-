from machine import Pin, I2C
from math import sqrt
from umqtt.simple import MQTTClient
import lis3dh
import utime
import ujson
import network

# Initialise pins
i2c = I2C(scl=Pin(5), sda=Pin(4), freq=10000)
sensor = lis3dh.lis3dh(i2c)

# optional alarm output
# led = Pin(12, Pin.OUT)
# led.on()

db = '/data/db.json'

# Initialise globals
chunkData = []
activityWindow = []
payloadQueue = []

# take an initial time reading (epoch is (2000, 1, 1, 0, 0, 0, 5, 1))
curTime = utime.localtime()

# Establish a connection to the broker
ap_if = network.WLAN(network.AP_IF)
ap_if.active(False)

sta_if = network.WLAN(network.STA_IF)
sta_if.active(True)
sta_if.connect("EEERover", "exhibition")
# Wait until the connection is established before continuing
while not sta_if.isconnected():
    utime.sleep(1)

client = MQTTClient("avocadotoast", "192.168.0.10")
client.connect()



# takes n readings of data from the accelerometer registers
def take_readings(n=20):
    cumX = 0
    cumY = 0
    cumZ = 0
    cumTemp = 0

    # accumulate the sensor readings
    for i in range(n):
        cumX += sensor.read_x()
        cumY += sensor.read_y()
        cumZ += sensor.read_z()
        cumTemp += sensor.read_raw_temperature()

        utime.sleep_us(1000)
    
    # average the sensor readings to reduce the effect of noise
    x = cumX/n
    y = cumY/n
    z = cumZ/n
    
    # the L2 norm is a useful output for analysing sleep data
    xyznorm = sqrt(x**2 + y**2 + z**2)

    # take the L2 norm of the accelerometer values
    # we found that excluding the z axis improved
    # the detectability of sudden movements in bed
    xynorm = sqrt(x**2 + y**2)
    temperature = cumTemp/n
    dateTime = utime.localtime()
    
    # returns a dictionary with useful values 
    return {"time": dateTime, "accelData": {"x": x, "y": y, "z": z, "norm": xyznorm, "xynorm": xynorm}, "temperature": temperature}
    
   

# count the number of readings above a threshold value within an array
def activity_in_chunk(chunk, thresh = 0.08):
    count = 0
    for reading in chunk:
        if abs(reading) > thresh:
            count += 1
    
    return count


# take the difference between consecutive values in an array
def arr_diff(arr):
    return [j-i for i, j in zip(arr[:-1], arr[1:])]

# transforms the global activity window so that it has the last 5 values
def add_to_window(activityCount):
    activityWindow.insert(0, activityCount)
    if len(activityWindow) > 5:
        activityWindow.pop()

# apply the weighted sum of the activities in the window
def process_window(activityWindow, weights = [0.04, 0.2, 1, 0.2, 0.04]):
    # This makes sure there is always a centre value in the window
    if len(activityWindow) < 5:
        return sum(i*j for i,j in zip(activityWindow, weights[2:]))
    else:
        return sum(i*j for i,j in zip(activityWindow, weights))

# construct the JSON payload to send to the broker
def construct_payload(state, time, activity, temp, accelData):
    # add 1 to the minute to display the correct time at which the epoch ends
    adjustedTime = time[0], time[1], time[2], time[3], time[4]+1, time[5], time[6], time[7]
    return ujson.dumps({"state": state, "time": adjustedTime, "activity": activity, "temperature": temp, "accelData": accelData})




def read_all_and_pack():
    # take data readings for the current time instance
    curData = take_readings()
    
    # checks to see if the reading is in the same minute
    # as the current time epoch
    if curData["time"][:5] == curTime[:5]:
        # if in the same epoch, add the xynorm value to the chunk
        chunkData.append(curData["accelData"]["xynorm"])
        return None
    else:
        # take the difference between consecutive values
        # this effectively low-pass filters the data, and centres
        # it around 0
        xyDiffNorm = arr_diff(chunkData)
        # count the number of cases of activity in a chunk      
        activity_count = activity_in_chunk(xyDiffNorm)
        # put this activity in the window to be weighted
        add_to_window(activity_count)
        # weight the activity window to give a metric for activity 
        activity = process_window(activityWindow) 
       
        # build the message with the data to be sent 
        payload = construct_payload("MEASURING", curTime, activity, curData["temperature"], curData["accelData"])    
        
        # simple code to implement a detector for high amounts of activity
        # can easily be expanded on to make an alarm
        # if activity > 10:
        #     led.off()
        # else:
        #     led.on() 
       
        return payload

# Publish a message to indicate the start of a new data set
newSession = {"state": "NEW_SESSION", "time": curTime}
newSessionJSON = ujson.dumps(newSession)
print(newSessionJSON)
client.publish("esys/avocadotoast/startup", bytes(newSessionJSON, "utf-8"))
   
while True:

    payload = read_all_and_pack()

    if payload is None:
        # payload not ready
        utime.sleep_ms(500)
        continue
    
    # if payload ready to send, reset curTime and clear chunkData
    curTime = utime.localtime()
    chunkData = [] 

    # failsafe for if the connection drops
    if not sta_if.isconnected():
        print("Not connected; acquiring db.json...")
        # writes the payload to a file rather than publishing
        with open(db, 'a') as f:
            f.write(payload + '\n')
    
    else:
        print("connected: maybe dumping db.json...")
        with open(db, 'r') as f:
            # read any cached payloads that have not been sent
            cached_payloads = f.readlines()
        with open(db, 'w') as f:
            pass # blank the file
        while len(cached_payloads) != 0:
            # publish any old payloads that haven't been sent
            print(cached_payloads[0])
            client.publish('esys/avocadotoast/sensor', bytes(cached_payloads.pop(0), 'utf-8'))
        # publish the current payload
        print(payload)
        client.publish("esys/avocadotoast/sensor", bytes(payload, "utf-8"))

         
    utime.sleep_ms(500)
