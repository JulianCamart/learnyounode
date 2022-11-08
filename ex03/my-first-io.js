const fs = require('fs')

let buf = fs.readFileSync(process.argv[2])

let count = 0

for (x of buf.values()) {
  if (x == 10) count += 1
}

console.log(count)
