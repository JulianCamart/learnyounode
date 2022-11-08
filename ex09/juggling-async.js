'use strict'
const http = require('http')
const data = []
let resultsCount = 0

process.argv.slice(2).forEach((url, key) => {
  http.get(url, (res) => {
    res.setEncoding('utf8')
    data[key] = ''
    res.on('data', (chunk) => data[key] += chunk)
    res.on('end', () => {
      resultsCount++
      if (resultsCount == 3) {
        data.forEach((value) => console.log(value))
      }
    })
    res.on('error', console.error)
  }).on('error',console.error)
})

