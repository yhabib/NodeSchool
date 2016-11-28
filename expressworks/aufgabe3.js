const express = require('express'),
      jade = require('jade'),
      path = require('path'),
      port = process.argv[2],
      dir = process.argv[3],
      app = express();

app.set('views', path.join(__dirname, 'templates'))
   .set('view engine', 'jade')
   .get('/home', (req, res) => res.render('index', {date: new Date().toDateString()}))
   .listen(port);
