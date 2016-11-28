const express = require('express'),
      path = require('path'),
      styles = require('stylus'),
      port = process.argv[2],
      code = process.argv[3],
      app = express();

app.use(styles.middleware(code))
   .use(express.static(code))
   .listen(port);