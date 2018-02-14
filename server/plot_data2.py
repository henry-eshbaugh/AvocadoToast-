import numpy as np
import matplotlib.pyplot as plt
import json
import math

def accel_norm(data):
    x = data['accelData']['x']
    y = data['accelData']['y']
    z = data['accelData']['z']
    
    return x, y, z, np.linalg.norm(np.asarray([x, y, z])), np.linalg.norm(np.asarray([x, y]))

def chunk(xs, n):
    def chunk2(arr, nReadings):
        nReadings = max(1, nReadings)
        return (arr[i:i+nReadings] for i in range(0, len(arr), nReadings))
    return filter(lambda x: len(x) == n, chunk2(xs, n))

def active_in_min(chunk, thresh = 0.08):
    ret = 0
    for reading in chunk:
        if abs(reading) > thresh:
            ret += 1
    return ret

#def drop_until_sleep(chunks, thresh=2):
#    idx, count = 0, 0
#    for minute in chunks:
#        if active_in_min(minute) < thresh:
#            count += 1
#        else:
#            count = 0
#        if count == 5:
#            return chunks[idx+1:]
#        idx += 1

def activity(minutes):
     return list(map(lambda x: 1.06*x[0] + 0.54 * x[1] + 0.58 * x[2] + 0.76 * x[3] + 2.3 * x[4] + 0.74 * x[5] + 0.67 * x[6], chunk(list(map(active_in_min, minutes)), 7)))
    

with open("sleepyandre2.txt") as f:
    readings = f.readlines()

readings = [json.loads(reading.strip()) for reading in readings]

dataArr = np.asarray(readings)

accel_norm_vec = np.vectorize(accel_norm)
xArr, yArr, zArr, xyzNormArr, xyNormArr = accel_norm_vec(dataArr)
xdiff = [t - s for s, t in zip(xArr, xArr[1:])]
ydiff = [t - s + 2 for s, t in zip(yArr, yArr[1:])]
zdiff = [t - s + 4 for s, t in zip(zArr, zArr[1:])]
xydiffnorm = [math.sqrt(s**2 + t**2) + 6 for s, t in zip(xdiff, ydiff)]
active = activity(chunk(xydiffnorm, 60))
#p1 = plt.plot(xArr, label='x')
#p2 = plt.plot(yArr, label='y')
#p3 = plt.plot(zArr-2, label='z')
#p4 = plt.plot(xyNormArr+3, label='norm(xy)')
#p5 = plt.plot(xyzNormArr, label='norm(xyz)')
#plt.plot(xdiff, label='xdiff')
#plt.plot(ydiff, label='ydiff')
#plt.plot(zdiff, label='zdiff')
#plt.plot(xydiffnorm, label='xydiffnorm')
plt.plot(active, label='active')

plt.legend()
plt.show()
