const readDir = require('./readDirModule');

var path = process.argv[2];
var ext = process.argv[3];
readDir(path, ext, (err, list) => {
  if(err) throw err;
  list.forEach(v => console.log(v));
});
