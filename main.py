from machine import Pin, I2C
import lis3dh
import utime
import ujson

i2c = I2C(scl=Pin(5), sda=Pin(4), freq=10000)

sensor = lis3dh.lis3dh(i2c)

def test():
    val = i2c.readfrom_mem(0x18, 0x28, 2)
    print("Byte 0:", val[0]) 
    print("Byte 1:", val[1])

    print("Byte 0 Masked:", val[0] & 0b00001111) 
    print("Byte 1 Masked:", val[1] & 0b00001111)

while True:
    xAccel = sensor.read_x()
    yAccel = sensor.read_y()
    zAccel = sensor.read_z()
    temperature = sensor.read_temperature()
    dateTime = utime.localtime()
    #print("Accelerometer values (m/s^2):\n    x: {0}    y: {1}    z: {2}".format(xAccel, yAccel, zAccel))
    #print("At time: {0}".format(dateTime))
    data = ujson.dumps({"time": dateTime, "accelData": {'xAccel': xAccel, "yAccel": yAccel, "zAccel": zAccel}, "temperatureData": temperature})
    print(data)
    utime.sleep(1)
