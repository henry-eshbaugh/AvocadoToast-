import numpy as np
import matplotlib.pyplot as plt
import json
import math

def accel_norm(data):
    x = data['accelData']['x']
    y = data['accelData']['y']
    z = data['accelData']['z']
    
    return x, y, z, np.linalg.norm(np.asarray([x, y, z])), np.linalg.norm(np.asarray([x, y]))


def activity_in_chunk(chunk, thresh = 0.08):
    return len(np.where(abs(chunk) > thresh)[0])

def activity_window(activities, weights = [0.04, 0.2, 1, 0.2, 0.04]):
    return np.convolve(activities, weights, 'same')    

with open("sleepyandre3.txt") as f:
    readings = f.readlines()

readings = [json.loads(reading.strip()) for reading in readings]

dataArr = np.asarray(readings)

accel_norm_vec = np.vectorize(accel_norm)
xArr, yArr, zArr, xyzNormArr, xyNormArr = accel_norm_vec(dataArr)
xDiff = np.ediff1d(xArr)
yDiff = np.ediff1d(yArr)
zDiff = np.ediff1d(zArr) 
xyDiffNorm = np.ediff1d(xyNormArr)

xyDiffNormChunks = np.array_split(xyDiffNorm, int(len(xyDiffNorm)/60))
activityChunks = np.vectorize(activity_in_chunk)(xyDiffNormChunks) 
weightedActivities = activity_window(activityChunks)

#active = activity(chunk(xydiffnorm, 60))
#p1 = plt.plot(xArr, label='x')
#p2 = plt.plot(yArr, label='y')
#p3 = plt.plot(zArr-2, label='z')
#p4 = plt.plot(xyNormArr+3, label='norm(xy)')
#p5 = plt.plot(xyzNormArr, label='norm(xyz)')
plt.plot(xDiff, label='xdiff')
plt.plot(yDiff + 2, label='ydiff')
plt.plot(zDiff + 4, label='zdiff')
plt.plot(xyDiffNorm + 6, label='xydiffnorm')
#plt.plot(active, label='active')

plt.legend()
plt.show()
