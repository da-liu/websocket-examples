// WebSocket is the name of a protocol for client-server communication
// E.g. http is a protocol, http://localhost:3000; for WebSocket, ws://localhost:3000
// 'ws' is one of many libraries that implement an API for the WebSocket protocol
// Other libraries include: 'socket.io', 'websocket-node', 'primus', etc

var WebSocket = require('ws')

// webSockets extends the EventEmitter class
// Attaching listeners to this is essentially how server handles WebSocket connections from multiple clients
var webSockets = new WebSocket.Server({ port: 4002 })

// If a client connects to the server via WebSocket
// Callback receive a single client connection
webSockets.on('connection', function(oneSocket) {

  // If the client sends a message, the 'message' event is triggered
  oneSocket.on('message', function(clientMessage) {

    console.log(clientMessage)
    // Here we echo back to the client whatever message was received
    // Note this only sends to a single client
    oneSocket.send(`Server echo: ${clientMessage}`)

  })

})

console.log('WS listening on port 4002 ...')
