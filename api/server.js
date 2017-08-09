// Instead of a plain node.js server, we can also use express

var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(4002)
console.log('Listening on port 4002 ...')

app.get('/', function(req, res) {
  res.send('hello from express server')
})

var chat = io.of('/chat')
var news = io.of('/news')

chat.on('connection', function(socket) {

  console.log('-------new chat client------')

  // both socket and chat are available
  // socket is for namespaced msgs, i.e. only under '/chat'
  // chat will send msgs to everyone
  socket.on('message', function(msg) {
    console.log('chat socket:', msg)
  })

})

news.on('connection', function(socket) {

  console.log('--------new news client---------')

  socket.on('message', function(msg) {
    console.log('news socket:', msg)
  })

})
