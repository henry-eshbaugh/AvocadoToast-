# lis3dh.py

import ustruct

SENSOR_ADDR = 0x18
CTRL_REG1 = 0x20
CTRL_REG4 = 0x23
TEMP_CFG_REG = 0x1F
OUT_X_L = 0x28
OUT_Y_L = 0x2A
OUT_Z_L = 0x2C
OUT_ADC3_L = 0x0C
GRAVITY_CONST = 9.806

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
        self.i2c.writeto_mem(SENSOR_ADDR, CTRL_REG4, bytearray([0b10001000]))
        self.i2c.writeto_mem(SENSOR_ADDR, CTRL_REG1, bytearray([0b01110111]))
        self.i2c.writeto_mem(SENSOR_ADDR, TEMP_CFG_REG, bytearray([0b11000000]))

    def read_seq(self, addr):
        rawDataL = self.i2c.readfrom_mem(SENSOR_ADDR, addr, 1)[0]
        rawDataH = self.i2c.readfrom_mem(SENSOR_ADDR, addr+1, 1)[0]
        return rawDataH << 8 | rawDataL
    
    def unsigned_to_signed_16b(self, num):    
        if num > 32767:
            return num-65536
        else:
            return num
    
    def read_raw_x(self):
        return self.read_seq(OUT_X_L)

    def read_raw_y(self):
        return self.read_seq(OUT_Y_L)

    def read_raw_z(self):
        return self.read_seq(OUT_Z_L)    

    def read_raw_temperature(self):
        return self.read_seq(OUT_ADC3_L)        

    def read_x(self):
        rawData = self.unsigned_to_signed_16b(self.read_raw_x())
        return (rawData/16380) * GRAVITY_CONST
    def read_y(self):
        rawData = self.unsigned_to_signed_16b(self.read_raw_y())
        return (rawData/16380) * GRAVITY_CONST
    def read_z(self):
        rawData = self.unsigned_to_signed_16b(self.read_raw_z())
        return (rawData/16380) * GRAVITY_CONST

    #def read_temperature(self):
    #    rawData = self.read_seq(OUT_ADC3_L)
    #    return rawData 
