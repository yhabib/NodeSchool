const express = require('express'),
      path = require('path'),
      app = express()
      port = process.argv[2],
      dir = process.argv[3];

app.use(express.static(dir || path.join(__dirname, 'public'))).listen(port || 8080);
