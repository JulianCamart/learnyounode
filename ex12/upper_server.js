'use strict'
const http = require('http')

const server = http.createServer((req, res) => {
  let body = ''
  req.on('data', (data) => body += data)
  req.on('end', () => {
    res.end(body.toUpperCase())
  })
})
server.listen(process.argv[2])
