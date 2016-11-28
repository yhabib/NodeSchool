const express = require('express'),
      port = process.argv[2],
      app = express();

app.get('/home', (req, res) => res.end("Hello World!")).listen(port);