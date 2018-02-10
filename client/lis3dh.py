# lis3dh.py
from enum import Enum

class Sensitivity(Enum):
    SENSE_2G  = 0
    SENSE_4G  = 1
    SENSE_8G  = 2
    SENSE_16G = 3

class FuckedTWIException(Exception):
    pass

class lis3dh:
    def __init__(self, i2c, dostartup=True, ranging=Sensitivity.SENSE_2G):
        self.i2c = i2c
        self.ranging = ranging
        if i2c is None:
            raise FuckedTWIException(u"୧༼ಠ益ಠ╭∩╮༽ you shithead".encode())
        if dostartup:
            self.startup()

    def startup(self):
        # magic number 0x97 -> enable x, y, z
        # accels, disable power save, come
        # out of powerdown to normal operating
        # mode
        self.i2c.writeto_mem(0x18, 0x20, 0x97)
        # enable temperature sensor & ADC
        self.i2c.writeto_mem(0x18, 0x1F, 0xC0)
        # set ranging, enable high-precision, block data update
        # (must read both result registers before readings update)
        self.i2c.writeto_mem(0b10001000 | (self.ranging << 4)

    def read2(self, addr):
        xl = self.i2c.readfrom_mem(0x18, addr,   1)[0]
        xh = self.i2c.readfrom_mem(0x18, addr+1, 1)[0]
        return (xh << 8) | xl

    def set_ranging(self, ranging):
        self.ranging = ranging
    def get_ranging(self, ranging):
        return self.ranging

    def readx(self):
        return self.read2(0x28)
    def ready(self):
        return self.read2(0x2A)
    def readz(self):
        return self.read2(0x2C)
    def readtemp(self):
        return self.read2(0x0C)
