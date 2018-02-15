### AvocadoToast: An EE3 Embedded Systems Group

AvocadoToast pulls accelerometer data off the
LIS3DH MEMS module and creates a web interface
for the data. It is capable of acting as a sleep
monitor, and is trivially extensible to add
alternate functionality or sensing ability.

The `client/` directory contains the microPython
firmware that executes on the board itself,
which read from the sensor and publish events
on the EEERover MQTT server.

The `web/` directory contains the backend
and frontend of our marketing website
and API. The service can be initialized
by executing the included start\_server.sh
script. An MQTT listener daemon is
created, and a Flask application is started
up. The Flask application serves our marketing
website (TCP port 5000, on the root directory)
and a number of readings the sensor is capable
of taking (exported on `/sensor/<cmd>`, where
`<cmd>` is `x`, `y`, `z`, etc. This allows
server extensions to be implemented in Python
and custom clients to be developed with an
easy-to-use API. In fact, our index page
uses the API itself to access the JSON
database containing the raw sensor data.
A trivial extension has already been implemented
for an appliance (in this case a washing machine)
as a proof of concept.

The `data/` directory contains data of a user's
sleep patterns collected using the device.
The plot\_data python files were used to graph
the sensor readings for testing purposes.
Plotting the data off-board allows for understanding
of what operations should be performed on-board
to get an appropriate metric for sleep activity
