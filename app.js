const express = require('express')
const cors = require('cors')

app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', function (socket) {
  socket.on('sendItem', (data) => {
    socket.broadcast.emit('sendData', data)
  })
})

http.listen(3001, function () {
  console.log('listening on *:3001')
})
