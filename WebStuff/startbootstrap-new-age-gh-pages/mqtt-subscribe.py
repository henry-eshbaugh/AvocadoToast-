import paho.mqtt.client as mqtt
from threading import Thread
import json

def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    client.subscribe("esys/avocadotoast/#")

def on_message(client, userdata, msg):
    with open('db.json', 'a') as f:
        f.write(msg + '\n')

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect ("192.168.0.10", 1833, 60)

mqttworker = Thread(target=client.loop_forever)
mqttworker.start()
