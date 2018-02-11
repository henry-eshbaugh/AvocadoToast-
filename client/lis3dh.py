# lis3dh.py

import ustruct

class FuckedTWIException(Exception):
    pass

class lis3dh:
    def __init__(self, i2c, dostartup=True):
        self.i2c = i2c
        if i2c is None:
            raise FuckedTWIException("୧༼ಠ益ಠ╭∩╮༽ you shithead".encode())
        if dostartup:
            self.startup()

    def startup(self):
        # magic number 0x97 -> enable x, y, z
        # accels, disable power save, come
        # out of powerdown to normal operating
        # mode
        self.i2c.writeto_mem(0x18, 0x23, bytearray([0b10001000]))
        self.i2c.writeto_mem(0x18, 0x20, bytearray([0b01110111]))
        self.i2c.writeto_mem(0x18, 0x1F, bytearray([0b11000000]))

    def read_seq(self, addr):
        rawDataL = self.i2c.readfrom_mem(0x18, addr, 1)[0]
        rawDataH = self.i2c.readfrom_mem(0x18, addr+1, 1)[0]
        return rawDataH << 8 | rawDataL
    
    def unsigned_to_signed_16b(self, num):    
        if num > 32767:
            return num-65536
        else:
            return num

    def read_x(self):
        rawData = self.unsigned_to_signed_16b(self.read_seq(0x28))
        return (rawData/16380) * 9.06
    def read_y(self):
        rawData = self.unsigned_to_signed_16b(self.read_seq(0x2A))
        return (rawData/16380) * 9.06
    def read_z(self):
        rawData = self.unsigned_to_signed_16b(self.read_seq(0x2C))
        return (rawData/16380) * 9.06
    def read_temperature(self):
        rawData = self.read_seq(0x0C)
        return rawData 
