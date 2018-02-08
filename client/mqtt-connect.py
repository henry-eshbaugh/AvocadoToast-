import network
import machine
from umqtt.simple import MQTTClient

ap_if = network.WLAN(network.AP_IF)
ap_if.active(false)

sta_if = network.WLAN(network.STA_IF)
sta_if.active(True)
sta_if.connect("EEERover", "exhibition")

client = MQTTClient(machine.unique_id(), "192.168.0.10")
client.connect()

# client.publish("esys/avocadotoast/test", bytes("frukky frink", "utf-8"))
