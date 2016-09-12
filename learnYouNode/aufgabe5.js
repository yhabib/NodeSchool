const fs = require('fs');
const pt = require('path');
const path = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(path, (err, list) => {
  if(err) throw err;

  list = list.filter(v => pt.extname(v) === ext);
  list.forEach(v => console.log(v));
});
