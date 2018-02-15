from machine import Pin, I2C
from math import sqrt
from umqtt.simple import MQTTClient
import lis3dh
import utime
import ujson
import network

i2c = I2C(scl=Pin(5), sda=Pin(4), freq=10000)
sensor = lis3dh.lis3dh(i2c)
led = Pin(12, Pin.OUT)
led.on()

db = '/data/db.json'


chunkData = []
activityWindow = []
payloadQueue = []

ap_if = network.WLAN(network.AP_IF)
ap_if.active(False)

sta_if = network.WLAN(network.STA_IF)
sta_if.active(True)
sta_if.connect("EEERover", "exhibition")
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

# average the accelerometer readings to reduce the effect of noise
    for i in range(n):
        cumX += sensor.read_x()
        cumY += sensor.read_y()
        cumZ += sensor.read_z()
        cumTemp += sensor.read_raw_temperature()

        utime.sleep_us(1000)

    x = cumX/n
    y = cumY/n
    z = cumZ/n

    xyznorm = sqrt(x**2 + y**2 + z**2)

# take the L2 norm of the accelerometer values
# we found that including the acceleration in the z axis reduced
# the detectability of sudden movements in bed
    xynorm = sqrt(x**2 + y**2)
    temperature = cumTemp/n
    dateTime = utime.localtime()
    
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

# creates a window of 5 chunks long which is then used to calculate activity
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
    adjustedTime = time[0], time[1], time[2], time[3], time[4]+1, time[5], time[6], time[7]
    return ujson.dumps({"state": state, "time": adjustedTime, "activity": activity, "temperature": temp, "accelData": accelData})





# take an initial time reading (epoch is (2000, 1, 1, 0, 0, 0, 5, 1))
curTime = utime.localtime()
newSession = {"state": "NEW_SESSION", "time": curTime}
newSessionJSON = ujson.dumps(newSession)
print(newSessionJSON)
client.publish("esys/avocadotoast/startup", bytes(newSessionJSON, "utf-8"))


def read_all_and_pack():
    curData = take_readings()
    
    if curData["time"][:5] == curTime[:5]:
        chunkData.append(curData["accelData"]["xynorm"])
        return None
    else:
        xyDiffNorm = arr_diff(chunkData)      
        activity_count = activity_in_chunk(xyDiffNorm)
        add_to_window(activity_count)
        
        activity = process_window(activityWindow) 
        
        payload = construct_payload("MEASURING", curTime, activity, curData["temperature"], curData["accelData"])    
            
        if activity > 3:
            led.off()
        else:
            led.on() 
       
         

        return payload
    
while True:

    payload = read_all_and_pack()

    if payload is None:
        utime.sleep_ms(500)
        continue
    
    curTime = utime.localtime()
    chunkData = [] 


    if not sta_if.isconnected():
        print("Not connected; acquiring db.json...")
        with open(db, 'a') as f:
            f.write(payload + '\n')
    
    else:
        print("connected: maybe dumping db.json...")
        with open(db, 'r') as f:
            cached_payloads = f.readlines()
        with open(db, 'w') as f:
            pass # blank the file
        while len(cached_payloads) != 0:
            print(cached_payloads[0])
            client.publish('esys/avocadotoast/sensor', bytes(cached_payloads.pop(0), 'utf-8'))
        print(payload)
        client.publish("esys/avocadotoast/sensor", bytes(payload, "utf-8"))

         
    utime.sleep_ms(500)
