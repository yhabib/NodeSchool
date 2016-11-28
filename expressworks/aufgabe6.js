const http = require('http'),
      express = require('express'),
      path = require('path'),
      crypto = require('crypto'),
      logger = require('morgan'),
      app = express();
    
app
  .use(logger('dev'))
  .put('/message/:id', (req, res) => {
      res.writeHead(200, {'content-type': "text/plain"});
      res.end(crypto.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'));
  });

http.createServer(app).listen(process.argv[2]);

      