const http = require('http');

const port = process.argv[2];
const path = process.argv[3];

const server = http.createServer(callback);

server.listen(port);



function callback(req, res) {
	console.log(req);
	console.log(res);
}



