var express = require('express')
var app = express()
fs = require('fs');

app.get('/graph', function (req, res) {
  console.log('got app.get(graph)');
  const html=fs.readFile('./graph2.html', function (err, html) {
    console.log('read file');
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('listening at http://%s:%s', host, port)
});
