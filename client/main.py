from machine import Pin, I2C
from math import sqrt
from umqtt.simple import MQTTClient
import lis3dh
import utime
import ujson
import network

i2c = I2C(scl=Pin(5), sda=Pin(4), freq=10000)

sensor = lis3dh.lis3dh(i2c)

# establishes a connection with the MQTT broker
def mqtt_connect(client):
    ap_if = network.WLAN(network.AP_IF)
    ap_if.active(False)

    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.connect("EEERover", "exhibition")

# wait for the connection to be made
    while not sta_if.isconnected():
        utime.sleep(1)

    client.connect()

# takes n readings of data from the accelerometer registers
def take_readings(n=20):
    cumX = 0
    cumY = 0
    cumTemp = 0

# average the accelerometer readings to reduce the effect of noise
    for i in range(n):
        cumX += sensor.read_x()
        cumY += sensor.read_y()
        cumTemp += sensor.read_raw_temperature()

        utime.sleep_us(1000)

    x = cumX/n
    y = cumY/n

# take the L2 norm of the accelerometer values
# we found that including the acceleration in the z axis reduced
# the detectability of sudden movements in bed
    xynorm = sqrt(x**2 + y**2)
    temperature = cumTemp/n
    dateTime = utime.localtime()

    return {"time": dateTime, "xynorm": xynorm, "temperature": temperature}
   

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


def add_to_window(activityCount, activityWindow):
    activityWindow = [activityCount] + activityWindow
    if len(activityWindow) > 5:
        return activityWindow[:-1]
    else:
        return activityWindow

def process_window(activityWindow, weights = [0.04, 0.2, 1, 0.2, 0.04]):
    if len(activityWindow) < 5:
        return sum(i*j for i,j in zip(activityWindow, weights[2:]))
    else:
        return sum(i*j for i,j in zip(activityWindow, weights))


def construct_payload(state, time, activity, temp):
    adjustedTime = time[0], time[1], time[2], time[3], time[4]+1, time[5], time[6], time[7]
    return ujson.dumps({"state": state, "time": adjustedTime, "activity": activity, "temperature": temp})

#client = MQTTClient("avocadotoast", "192.168.0.10")
#mqtt_connect(client)

#client.publish("esys/avocadotoast/begin", bytes("NEW_SESSION", "utf-8"))



curTime = utime.localtime()
newSession = {"state": "NEW_SESSION", "time": curTime}
newSessionJSON = ujson.dumps(newSession)
print(newSessionJSON)
#client.publish("esys/avocadotoast/startup", bytes(newSessionJson), "utf-8")

chunkData = []
activityWindow = []
payloadQueue = []

while True:

    curData = take_readings(20)
    
    if curData["time"][:5] == curTime[:5]:
        chunkData.append(curData["xynorm"])
    else:
        xyDiffNorm = arr_diff(chunkData)      
        activity_count = activity_in_chunk(xyDiffNorm)
        activityWindow = add_to_window(activity_count, activityWindow)
        
        activity = process_window(activityWindow) 
        
        payload = construct_payload("MEASURING", curTime, activity, curData["temperature"])    
            
#        if len(payloadQueue) == 3:
#            print(payloadQueue.pop())
        
        print(payload)
#        client.publish("esys/avocadotoast/activity", bytes(payload, "utf-8"))
        curTime = utime.localtime()
        chunkData = [] 
         
    utime.sleep_ms(500)
