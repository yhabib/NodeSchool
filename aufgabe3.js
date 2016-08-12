const fs = require('fs');
const filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);
var text = buffer.toString().split('\n');
console.log(text.length - 1);
