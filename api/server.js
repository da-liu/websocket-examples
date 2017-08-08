var WebSocket = require('ws')
var webSockets = new WebSocket.Server({ port: 4002 })

webSockets.on('connection', function(oneSocket) {

  oneSocket.on('message', function(clientMessage) {

    console.log(clientMessage)
    oneSocket.send(`Server echo: ${clientMessage}`)

  })

})

console.log('WS listening on port 4002 ...')
