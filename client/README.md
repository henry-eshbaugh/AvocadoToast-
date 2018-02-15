### Firmware for AvocadoToast

`main.py` contains code to initialize
the network & I2C interfaces, and instantiate
an object of class `lis3dh`, which abstracts
I2C transactions into methods for sensor reading.
Raw data is read and processed, and formatted
into JSON packets for transmission over Wi-Fi/MQTT.
This includes raw data as well, for any application
desired to be implemented in Flask; however, sufficient
data is transmitted in the top-level of the dictionary
to perform sleep monitoring services.

When a measurement is taken, the program will take
a series of readings in a short time period
(20 readings by default). The average of these readings
is then taken, which reduces the effect of noise by a
factor of more than 10.

The algorithm carried out on the accelerometer data
in `main.py` is a common model used in actigraph
scoring, where a window of 5 epochs each with 1 minute of
measurements have a weighted sum applied. This gives
an appropriate metric by which one can measure sleep activity.

`lis3dh.py` implements class `lis3dh`, which is a
collection of methods for conducting I2C
transactions convenient for our purposes. This
includes configuration register initialization
and methods for taking the latest sensor readings.
Sensing is done synchronously on a timer, with 20-reading
bursts at T=1ms every half-second. `lis3dh.py` also
contains a number of handy constants.
