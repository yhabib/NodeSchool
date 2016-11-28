const http = require('http'),
      express = require('express'),
      logger = require('morgan'),
      app = express(),
      fs = require('fs');

app
  .use(logger('dev'))
  .get('/books', (req, res) => {
      fs.readFile(process.argv[3], (err, data) => res.json(JSON.parse(data.toString())));
  });

http.createServer(app).listen(process.argv[2]);
