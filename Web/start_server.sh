#!/bin/sh
python mqtt-subscribe.py &
FLASK_APP=main.py flask run
