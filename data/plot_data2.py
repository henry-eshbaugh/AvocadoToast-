import numpy as np
import matplotlib.pyplot as plt
import json
import math

def accel_norm(data):
    # takes the L2 norm of a record with x,y,z
    x = data['accelData']['x']
    y = data['accelData']['y']
    z = data['accelData']['z']
    
    # return a tuple with 5 different useful values
    return x, y, z, np.linalg.norm(np.asarray([x, y, z])), np.linalg.norm(np.asarray([x, y]))


def activity_in_chunk(chunk, thresh = 0.08):
    # counts the number of readings in a chunk above the threshold 
    return len(np.where(abs(chunk) > thresh)[0])

def activity_window(activities, weights = [0.04, 0.2, 1, 0.2, 0.04]):
    # gets a weighted sum for each reading in the array of activities
    return np.convolve(activities, weights, 'same')    

with open("sleepyandre3.txt") as f:
    # read all lines of data into an array
    readings = f.readlines()

# decode JSON string into a dictionary object
readings = [json.loads(reading.strip()) for reading in readings]

# convert the python array into a more
# flexible numpy array
dataArr = np.asarray(readings)

# vectorize the normalisation function to map an entire array
accel_norm_vec = np.vectorize(accel_norm)
xArr, yArr, zArr, xyzNormArr, xyNormArr = accel_norm_vec(dataArr)

# take the difference between consecutive array values
xDiff = np.ediff1d(xArr)
yDiff = np.ediff1d(yArr)
zDiff = np.ediff1d(zArr) 
xyDiffNorm = np.ediff1d(xyNormArr)

# chunk the array into sub-arrays of length 60
xyDiffNormChunks = np.array_split(xyDiffNorm, int(len(xyDiffNorm)/60))
# count the activity in each chunk
activityChunks = np.vectorize(activity_in_chunk)(xyDiffNormChunks) 
# perform a moving weighted sum of the activities
weightedActivities = activity_window(activityChunks)

# plot options
# uncomment to view graph

#p1 = plt.plot(xArr, label='x')
#p2 = plt.plot(yArr, label='y')
#p3 = plt.plot(zArr-2, label='z')
#p4 = plt.plot(xyNormArr+3, label='norm(xy)')
#p5 = plt.plot(xyzNormArr, label='norm(xyz)')
#plt.plot(xDiff, label='xdiff')
#plt.plot(yDiff + 2, label='ydiff')
#plt.plot(zDiff + 4, label='zdiff')
#plt.plot(xyDiffNorm + 6, label='xydiffnorm')
plt.plot(weightedActivities, label='active')

plt.legend()
plt.show()
