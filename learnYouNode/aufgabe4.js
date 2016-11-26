const fs = require('fs'),
      path = process.argv[2];

fs.readFile(path, callback);

function callback(err, data) {
   if(err) throw err;

   var text = data.toString().split('\n');
   console.log(text.length - 1); 
}
