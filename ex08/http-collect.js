const http = require('http')

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8')
  data = ''
  res.on('data', (chunk) => data += chunk)
  res.on('end', () => {
    console.log(data.length)
    console.log(data)
  })
  res.on('error', console.error)
}).on('error',console.error)
