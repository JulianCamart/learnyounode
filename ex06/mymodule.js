const fs = require('fs')
var path = require('path');

module.exports = (dirPath, extFilter, callback) => {
  fs.readdir(dirPath, (err, filesList) => {
    if (err) return callback(err)

    callback(null, filesList.filter(file => path.extname(file) == '.' + extFilter))
  })
}
