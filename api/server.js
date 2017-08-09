// Instead of a plain node.js server, we can also use express

var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(4002)
console.log('Listening on port 4002 ...')

app.get('/', function(req, res) {
  res.send('hello from express server')
})

io.on('connection', function(socket) {

  console.log('-------new client connected------')

  socket.emit('msg', 'msg from express server via websocket')

  // socket.io allows you to emit and receive custom events
  // custom events are simply strings:
  // e.g. 'message', 'msg', 'data', 'private msg', 'notification'
  socket.on('data', function(data) {
    console.log(data)
  })

  socket.on('msg', function(msg) {
    console.log(msg)
  })

})
