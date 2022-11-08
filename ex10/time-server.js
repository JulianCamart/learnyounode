'use strict'
const net = require('net')
const strftime = require('strftime')
const server = net.createServer((socket) => {
  socket.end(strftime('%F %R') + "\n")
})
server.listen(process.argv[2])
