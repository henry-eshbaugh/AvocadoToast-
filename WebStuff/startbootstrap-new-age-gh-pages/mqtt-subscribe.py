import paho.mqtt.client as mqtt
from threading import Thread
import json

def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    client.subscribe("esys/avocadotoast/#")

def on_message(client, userdata, msg):
    with open('db1.json', 'a') as f:
        raw_payload = msg.payload.decode("utf-8")
        dat = json.dumps(raw_payload)
        dat['recvtime'] = time.localtime()
        f.write(json.loads(dat) + '\n')

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect ("192.168.0.10", 1883, 60)

client.loop_forever()
