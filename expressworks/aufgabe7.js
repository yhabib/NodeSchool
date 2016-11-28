const http = require('http'),
      express = require('express'),
      logger = require('morgan'),
      app = express();

app
  .use(logger('dev'))
  .get('/search', (req, res) => res.send(req.query));

http.createServer(app).listen(process.argv[2]);