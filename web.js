var express = require('express');
var fs = require('fs');

var filename = 'index.html';
var content = buf.toString(fs.readFileSync(filename));
var app = express.createServer(express.logger());

app.get('/', function(request, response, content) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
