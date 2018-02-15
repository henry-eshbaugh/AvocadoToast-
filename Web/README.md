## Web
Start the web server by invoking `sh start_server.sh`
at your command line.

`mqtt-subscribe.py` implements a daemon that logs
and minorly processes data received over MQTT.
It follows "esys/avocadotoast" on EEERover's
MQTT server and adds these JSON objects to
db.json in the root directory.

The Flask server is invoked, targeting `main.py`.
`main.py` will route `/` and `/index` to
`index.html`, a small marketing website for our
sleep tracking application. `main.py` also
serves the full database on `/db`, which is
used for the demo to load data points and
an example of RESTful design. Additionally,
the most recent sensor readings are exported
on `/sensor/`, e.g. `/sensor/x` and `/sensor/temp`,
which can be used to implement client-side scripts
using real-time (or close to) accelerometer data.

These are implemented by using Flask function
decorators to route URLs to functions returning the
string contents of the page (possibly HTML, etc).
Naturally, these can be trivially extended to
add new server-side functionality; such an act
amounts to little more than implementing a function
in Python.

A small example of an application to monitor
appliance activity is implemented on `/laundry`;
the function is in `main.py`.

The marketing website is defined by `templates/index.html`
and uses CSS and JavaScript located in `static/`. This
includes code for graphing in the live demo.

The live demo shows off activity data collected
from our helpful colleague, which can be found
in `db.json.`
