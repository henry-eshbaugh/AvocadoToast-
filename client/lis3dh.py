# lis3dh.py

import ustruct

# declaration of constants and register addresses
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
        # raise exception if the i2c pin not properly defined
        if i2c is None:
            raise FuckedTWIException("୧༼ಠ益ಠ╭∩╮༽ you shithead".encode())
        if dostartup:
            self.startup()

    def startup(self):
        # Set Block data update bit to 1 so the output registers
        # are not updated until MSB and LSB reading
        # selects scale of +- 2g
        # enables high-resolution mode
        self.i2c.writeto_mem(SENSOR_ADDR, CTRL_REG4, bytearray([0b10001000]))

        # magic number 0x97 -> enable x, y, z
        # accels, disable power save, come
        # out of powerdown to normal operating
        # mode
        self.i2c.writeto_mem(SENSOR_ADDR, CTRL_REG1, bytearray([0b10010111]))
        
        # enable the temperature sensor
        self.i2c.writeto_mem(SENSOR_ADDR, TEMP_CFG_REG, bytearray([0b11000000]))

    def read_seq(self, addr):
        # reads lower and upper bytes from two registers at a given address
        rawDataL = self.i2c.readfrom_mem(SENSOR_ADDR, addr, 1)[0]
        rawDataH = self.i2c.readfrom_mem(SENSOR_ADDR, addr+1, 1)[0]
        # combine the two bytes into a total value
        return rawDataH << 8 | rawDataL
    
    def unsigned_to_signed_16b(self, num):
        # performs conversion for 2s complement form    
        if num > 32767:
            return num-65536
        else:
            return num
   
    # read_raw methods read the register value directly
    # without processing the value 
    def read_raw_x(self):
        return self.read_seq(OUT_X_L)

    def read_raw_y(self):
        return self.read_seq(OUT_Y_L)

    def read_raw_z(self):
        return self.read_seq(OUT_Z_L)    

    def read_raw_temperature(self):
        return self.read_seq(OUT_ADC3_L)

    # converts a raw reading from an accelerometer register value
    # to units of ms^-2 
    def raw_accel_to_ms2(self, n):
        return (n/16380) * GRAVITY_CONST        

    # read methods which give the register values converted into
    # standard units
    def read_x(self):
        rawData = self.unsigned_to_signed_16b(self.read_raw_x())
        return self.raw_accel_to_ms2(rawData)
    def read_y(self):
        rawData = self.unsigned_to_signed_16b(self.read_raw_y())
        return self.raw_accel_to_ms2(rawData)
    def read_z(self):
        rawData = self.unsigned_to_signed_16b(self.read_raw_z())
        return self.raw_accel_to_ms2(rawData)

    # the device is not suitable for conversion of temperature
    # readings to units, as the device measures variations in
    # temperatures, not temperature values

    #def read_temperature(self):
    #    rawData = self.read_seq(OUT_ADC3_L)
    #    return rawData 
