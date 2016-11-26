const readDir = require('./readDirModule'),
      path = process.argv[2],
      ext = process.argv[3];

readDir(path, ext, (err, list) => {
  if(err) throw err;  
  else list.forEach(v => console.log(v));
});
