# lis3dh.py

import ustruct

class FuckedTWIException(Exception):
    pass

class lis3dh:
    def __init__(self, i2c, dostartup=True):
        self.i2c = i2c
        if i2c is None:
            raise FuckedTWIException("you shithead")
        if dostartup:
            self.startup()

    def startup(self):
        # magic number 0x97 -> enable x, y, z
        # accels, disable power save, come
        # out of powerdown to normal operating
        # mode
        self.i2c.writeto_mem(0x18, 0x20, 0x97)

    def read_seq(self, addr):
        return ustruct.unpack("<h", i2c.mem_read(2, 0x18, addr))

    def readx(self):
        return self.read_seq(0x28)
    def ready(self):
        return self.read_seq(0x2A)
    def readz(self):
        return self.read_seq(0x2C)


