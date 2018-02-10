from umqtt.simple import MQTTClient
from lis3dh import lis3dh, Sensitivity
import ujson
import math
import network
import machine

if __name__ == '__main__':
    ap_if = network.WLAN(network.AP_IF)
    ap_if.active(false)
    
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(True)
    sta_if.connect("EEERover", "exhibition")
    
    client = MQTTClient(machine.unique_id(), "192.168.0.10")
    client.connect()
    
    i2c = I2C(sda=Pin(4), scl=Pin(5))
    sensor = lis3dh(i2c)

    while True:
        x = sensor.readx()
        y = sensor.ready()
        z = sensor.readz()
        t = sensor.readtemp()
        m = math.sqrt(x**2 + y**2 + z**2)

        # accel data as x, y, z vector triad and scalar sc
        # t for temperature
        payload = ujson.dumps({'x' : x, 'y' : y, 'z' : z, 't' : t, 'sc' : m})
        client.publish("esys/avocadotoast/sensor", bytes(payload, "utf-8"))
        sleep(1)


# client.publish("esys/avocadotoast/test", bytes("frukky frink", "utf-8"))
