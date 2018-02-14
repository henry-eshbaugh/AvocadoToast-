// Create a client instance
client = new Paho.MQTT.Client("iot.eclipse.org", Number(443), "/wss");
client.startTrace();
// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect,
                useSSL: true});
console.log("attempting to connect...")


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("/World");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "/World";
  //client.send(message);
//console.log(client.getTraceLog());

  //client.getTraceLog().forEach(function(line){
  //  console.log('Trace: ' + line)
  //});
  //newMessage = new Paho.MQTT.Message("Sent using synonyms!");
  //newMessage.topic = "/World";
  client.publish(message)
  client.publish("/World", "Hello from a better publish call!", 1, false)

  topicMessage = new Paho.MQTT.Message("This is a message where the topic is set by setTopic");
  topicMessage.topic = "/World";
  client.publish(topicMessage)


}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}