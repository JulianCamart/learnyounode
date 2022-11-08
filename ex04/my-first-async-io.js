const fs = require('fs')

fs.readFile(process.argv[2], async (err, buf) => {
  if (err) return console.error(err)
  let count = 0

  for (x of buf.values()) {
    if (x == 10) count += 1
  }

  console.log(count)
})
