const http = require('http');

const url = process.argv[2];
var strings = '';

http.get(url, response => {
   response.on('data', data => strings += data.toString());
   response.on('end', () => {
     console.log(strings.length);
     console.log(strings);
   });
});

// OPTION -- B
// var http = require('http');
// var bl = require('bl');
//
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err);
//     data = data.toString();
//     console.log(data.length);
//     console.log(data);
//   }))
// })
