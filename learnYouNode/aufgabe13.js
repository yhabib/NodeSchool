'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, {'content-type': 'application/json'});

	if(req.method !== 'GET')
    return res.end('send me a GET\n');

		console.log(req.url);

  let endPoint = req.url.slice(0, req.url.indexOf('?'));
  let time = new Date(req.url.slice(req.url.indexOf('=') + 1));


  if(endPoint === '/api/parsetime')
		res.write(JSON.stringify({hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds()}));
  else if(endPoint === '/api/unixtime')
    res.write(JSON.stringify({unixtime: time.getTime()}));

	res.end();
});

server.listen(Number(process.argv[2]));

/*
var http = require('http')
var url = require('url')

function parsetime (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixtime (time) {
	return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true)
	var time = new Date(parsedUrl.query.iso)
	var result

	if (/^\/api\/parsetime/.test(req.url))
		result = parsetime(time)
	else if (/^\/api\/unixtime/.test(req.url))
		result = unixtime(time)

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
})
server.listen(Number(process.argv[2]))
*/
