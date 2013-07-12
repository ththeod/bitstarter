var express = require('express');
var fs = require('fs');

var filename = Ã'index.html';
var content = buf.toString(fs.readFileSync(filename));
var app = express.createServer(express.logger());

app.get('/', function(request, response, filename) {
  response.send(filename);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
