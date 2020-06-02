var express = require('express');
var app = express();
const port = process.env.PORT || 3000

// Load the plugin

app.use(express.static('public'))
//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});

app.use(express.static('./'));
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
