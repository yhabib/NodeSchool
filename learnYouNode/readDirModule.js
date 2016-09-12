const fs = require('fs');
const path = require('path');


module.exports = function(dir, ext, callback) {
  ext = '.' + ext;
  fs.readdir(dir, (err, list) => {
    if(err) return callback(err);
    list = list.filter(v => path.extname(v) === ext);
    return callback(null, list);
  });
}
