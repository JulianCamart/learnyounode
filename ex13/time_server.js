'use strict'
const http = require('http')

const server = http.createServer((req, res) => {
  const url = new URL(`http://${req.url}`)
  const date = new Date(url.searchParams.get('iso'))

  let data
  if (!date instanceof Date && isNaN(date)) {
    data = 'error'
  }

  if (url.pathname == '/parsetime') {
    data = {
     'hour': date.getHours(),
     'minute': date.getMinutes(),
     'second': date.getSeconds()
    }
  }
  if (url.pathname == '/unixtime') {
    data = {
      'unixtime': date.getTime()
    }
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(data))
})

server.listen(process.argv[2])
