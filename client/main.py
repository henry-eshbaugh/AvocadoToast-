from machine import Pin, I2C
from math import sqrt
from umqtt.simple import MQTTClient
import lis3dh
import utime
import ujson
import network

i2c = I2C(scl=Pin(5), sda=Pin(4), freq=10000)

sensor = lis3dh.lis3dh(i2c)

def mqtt_connect(client):
    ap_if = network.WLAN(network.AP_IF)
    ap_if.active(False)

    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.connect("EEERover", "exhibition")
    while not sta_if.isconnected():
        utime.sleep(1)

    client.connect()

def take_readings(n):
    cumX = 0
    cumY = 0
    cumZ = 0
    cumTemp = 0

    maxX = -1000
    maxY = -1000
    maxZ = -1000

    for i in range(n):
        xreading = sensor.read_x()
        yreading = sensor.read_y()
        zreading = sensor.read_z()
        tempreading = sensor.read_raw_temperature()

        cumX += xreading
        cumY += yreading
        cumZ += zreading

        cumTemp += sensor.read_raw_temperature()
        maxX = max(maxX, xreading)
        maxY = max(maxY, yreading)
        maxZ = max(maxZ, zreading)

        utime.sleep_us(1000)

    x = cumX/n
    y = cumY/n
    z = cumZ/n    
    norm = sqrt(x**2 + y**2 + z**2)
    temperature = cumTemp/n
    dateTime = utime.localtime()

    return {"time": dateTime, "accelData": {"x": x, "y": y, "z": z, "norm": norm, "max_x": maxX, "max_y": maxY, "max_z": maxZ}, "temperature": temperature}
    

#client = MQTTClient("avocadotoast", "192.168.0.10")
#mqtt_connect(client)

while True:
    data = take_readings(20)    
    payload = ujson.dumps(data)
    print(payload)
#   client.publish("esys/avocadotoast/sensor", bytes(payload, "utf-8"))
    utime.sleep_ms(500)



