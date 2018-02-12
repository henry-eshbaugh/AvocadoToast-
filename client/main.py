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

    #client = MQTTClient("avocadotoast", "192.168.0.10")
    client.connect()

#if __name__ == '__main__':
client = MQTTClient("avocadotoast", "192.168.0.10")
mqtt_connect(client)

while True:
#    rawx = sensor.read_raw_x()
#    rawy = sensor.read_raw_y()
#    rawz = sensor.read_raw_z()
    x = sensor.read_x()
    y = sensor.read_y()
    z = sensor.read_z()
    norm = sqrt(x**2 + y**2 + z**2)
    temperature = sensor.read_raw_temperature()
    dateTime = utime.localtime()
    #print("Accelerometer values (m/s^2):\n    x: {0}    y: {1}    z: {2}".format(xAccel, yAccel, zAccel))
    #print("At time: {0}".format(dateTime))
#    data = ujson.dumps({"time": dateTime, "accelData": {'x': x, "y": y, "z": z, 'norm': norm, 'rawx': rawx, 'rawy': rawy, 'rawz': rawz}, "temperatureData": temperature})
    payload = ujson.dumps({"time": dateTime, "accelData": {"x": x, "y": y, "z": z, "norm": norm}, "temperature": temperature})
    print(payload)
    client.publish("esys/avocadotoast/sensor", bytes(payload, "utf-8"))
    utime.sleep(1)







