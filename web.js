var express = require('express');
var fs = require('fs');

var filename = 'index.html';
var content = new Buffer(fs.readFileSync(filename));
var content2 = buf.toString((รร'utf8','0',content); 
var app = express.createServer(express.logger());

app.get('/', function(request, response, content2) {
  response.send(content2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
