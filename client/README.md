### Firmware for AvocadoToast

`main.py` contains code to initialize
the network & SPI interfaces, and instantiate
an object of class `lis3dh`, which abstracts
I2C transactions into methods for sensor reading.
Raw data is read and processed, and formatted
into JSON packets for transmission over Wi-Fi/MQTT.
This includes raw data as well, for any application
desired to be implemented in Flask; however, sufficient
data is transmitted in the top-level of the dictionary
to perform sleep monitoring services.

`lis3dh.py` implements class `lis3dh`, which is a
collection of methods for conducting I2C
transactions convenient for our purposes. This
includes configuration register initialization
and methods for taking the latest sensor readings.
Sensing is done synchronously on a timer, with 20-reading
bursts at T=1ms every half-second. `lis3dh.py` also
contains a number of handy constants.
