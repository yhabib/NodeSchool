const fs = require('fs'),
      filePath = process.argv[2],
      buffer = fs.readFileSync(filePath),
      text = buffer.toString().split('\n');
      
console.log(text.length - 1);
