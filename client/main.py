from machine import Pin, I2C
from math import sqrt
import lis3dh
import utime
import ujson

i2c = I2C(scl=Pin(5), sda=Pin(4), freq=10000)

sensor = lis3dh.lis3dh(i2c)

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
    data = ujson.dumps({"time": dateTime, "accelData": {"x": x, "y": y, "z": z, "norm": norm}, "temperature": temperature})
    print(data)
    utime.sleep(0.125)
