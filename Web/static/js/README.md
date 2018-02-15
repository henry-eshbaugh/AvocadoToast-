Chart.js : JavaScript for graphing JSON data from URL using CanvasJS  

Configures settings and renders interactive charts from JSON data hosted on a server, to HTML div IDs.
This includes parsing and handling of headers to separate data logs and provide correct timestamps.  

JSON files accessed from a URL, with record headers, to separate sleep logs.  
for sleep tracking application:  
{"state": "NEW_SESSION", "time": [2000, 1, 1, 0, 1, 0, 5, 1]}  
{"temperature": 64649.6, "time": [2000, 1, 1, 0, 1, 0, 5, 1], "activity": 3, "state": "MEASURING"}  
{"temperature": 64627.2, "time": [2000, 1, 1, 0, 2, 0, 5, 1], "activity": 1, "state": "MEASURING"}  
{"temperature": 64585.6, "time": [2000, 1, 1, 0, 3, 0, 5, 1], "activity": 0, "state": "MEASURING"}  

for a more expandable framework:  
{"state": "NEW_SESSION", "recvtime": "18, 02, 15, 13, 35, 15", "time": [2000, 1, 1, 0, 0, 1, 5, 1]}
{"recvtime": "18, 02, 15, 13, 36, 17", "temperature": 387.2, "accelData": {"y": 0.136972, "x": 0.0727966, "z": 9.43721, "xynorm": 0.155115, "norm": 9.43848}, "time": [2000, 1, 1, 0, 1, 1, 5, 1], "state": "MEASURING", "activity": 0}
{"recvtime": "18, 02, 15, 13, 37, 21", "temperature": 467.2, "accelData": {"y": -6.91854, "x": 1.13984, "z": 6.77152, "xynorm": 7.01181, "norm": 9.74776}

recvtime: Stores a timestamp when JSON is received by the server, to allow correct graphing of time  
state: Header used to distinguish beginning of record and simplify parsing  

Current Features:  
-Importing of JSON files correctly and automatically from database on webpage load to an array of records  
-Parsing of JSON data and correction of date/time values  
-Configuring of JSON data into (x: , y: ) data to be graphed  
-Graphing of sleep activity against time (currently showcasing data collected throughout a day, due to time constraints)  
    -Has been tested with Data recorded during sleep (see data folder)  
-Interactive features, such as toggling data sets, zooming of graph and on-hover data highlighting  

Partially completed Features:  
-Column chart of time slept for each record  
    -Configured to fit webpage, style and data sets  
    -Currently not working due to time constraints and limited JavaScript knowledge  

Feasible Future Features:  
-Plotting of classifiers for types of sleep eg. Deep sleep, Light sleep, REM sleep  
    -Not implemented due to limited time to collect data  
-Recording and plotting of temperature to determine potential trends (sensor on device)  
    -Requires more on-board processing of data to be useful  
-Tracking of sleep deficit and other trends  
-Simple incorporation of other sensors  
-Potential outputting of graphs to other apps    
