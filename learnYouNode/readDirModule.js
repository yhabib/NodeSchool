const fs = require('fs'),
      path = require('path');


module.exports = function(dir, ext, callback) {
  ext = '.' + ext;
  fs.readdir(dir, (err, list) => err ? callback(err) : callback(null, list.filter(v => path.extname(v) === ext)));
}
