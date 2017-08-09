// socket.io is another popular WebSocket libraries
// io is the library's default name for WebSockets

// First create a plain node server
var app = require('http').createServer(function(req, res) {
  res.end('hello from server')
})

// Wrap server app in socket io
// This makes WebSocket available on the same port as http server
var io = require('socket.io')(app)

io.on('connection', function(socket) {

  console.log('-----new connection-----')

  socket.emit('msg', 'msg from server')

  socket.on('msg', function(msg) {
    console.log(msg)
  })

})


app.listen(4002)
console.log('WS listening on port 4002 ...')
