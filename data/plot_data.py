import numpy as np
import matplotlib.pyplot as plt
import json

def accel_norm(data):
    x = data['accelData']['xAccel']
    y = data['accelData']['yAccel']
    z = data['accelData']['zAccel']
    
    return x, y, z, np.linalg.norm(np.asarray([x, y, z])), np.linalg.norm(np.asarray([x, y]))

with open("sleepyandre.txt") as f:
    readings = f.readlines()

readings = [json.loads(reading.strip()) for reading in readings]

dataArr = np.asarray(readings)

accel_norm_vec = np.vectorize(accel_norm)
xArr, yArr, zArr, xyzNormArr, xyNormArr = accel_norm_vec(dataArr)
p1 = plt.plot(xArr, label='x')
p2 = plt.plot(yArr, label='y')
p3 = plt.plot(zArr-2, label='z')
p4 = plt.plot(xyNormArr+3, label='norm(xy)')
p5 = plt.plot(xyzNormArr, label='norm(xyz)')
plt.legend()
plt.show()
