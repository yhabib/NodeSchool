const express = require('express'),
      bodyparser = require('body-parser'),
      port = process.argv[2],
      dir = process.argv[3],
      app = express();

String.prototype.reverse = String.prototype.reverse || function() {
    let aux = [],   
        str = this.split('');
    while(str.length > 0) 
        aux.push(str.pop());
    return aux.join('');
};

app.use(bodyparser.urlencoded({extended: false}))
   .post('/form', (req, res) => res.end(req.body.str.reverse()))
   .listen(port);

