const fs = require('fs')
const path = require('path');

fs.readdir(process.argv[2], (err, filesList) => {
  if (err) console.error(err)

  filesList
    .filter(file => path.extname(file) == '.' + process.argv[3])
    .forEach(file => console.log(file))
})
