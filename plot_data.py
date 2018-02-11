import numpy as np
import matplotlib.pyplot as plt
import json

def accel_norm(data):
    x = data['accelData']['xAccel']
    y = data['accelData']['yAccel']
    z = data['accelData']['zAccel']
    
    return np.linalg.norm(np.asarray([x, y, x]))

with open("sleepyandre.txt") as f:
    readings = f.readlines()

readings = [json.loads(reading.strip()) for reading in readings]

dataArr = np.asarray(readings)

accel_norm_vec = np.vectorize(accel_norm)
accelNormArr = accel_norm_vec(dataArr)
print(max(accelNormArr))
print(np.where(accelNormArr == max(accelNormArr)))
plt.plot(accelNormArr)
plt.show()
