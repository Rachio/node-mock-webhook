// Load the http module to create an http server.
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())

var server = app.listen(8081);

app.post('/', function(req, res) {
   console.log(req.headers);
   // print to console
   console.log(req.body);

   // just call res.end(), or show as string on web
   //res.send(JSON.stringify(req.body, null, 4));
   res.writeHead(200, {"Content-Type": "text/plain"});
   res.end();
});

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8081/");
