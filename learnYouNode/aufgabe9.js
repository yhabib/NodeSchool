const http = require('http');

const url = process.argv.slice(2);

var result = ['', '', ''];
var count = 0;

for(var i=0; i<url.length; i++)
  http.get(url[i], callback(i));

//  CLOSURE
function callback(pos) {
  return function(response) {
    response.on('data', data => {
      result[pos] += data.toString();
    });
    response.on('end', () => {
      count++;
      if(count === 3)
        result.forEach(line => console.log(line));
    });
  };
}


// Option B
// var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
//
//     function printResults () {
//       for (var i = 0; i < 3; i++)
//         console.log(results[i])
//     }
//
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err)
//             return console.error(err)
//
//           results[index] = data.toString()
//           count++
//
//           if (count == 3)
//             printResults()
//         }))
//       })
//     }
//
//     for (var i = 0; i < 3; i++)
//       httpGet(i)
