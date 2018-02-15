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
by executing the included start_server.sh
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
