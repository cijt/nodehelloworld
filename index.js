var express = require('express');
var app = express();
const path = require('path');

// set the path to the public assets
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath));

app.get('/pepito', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});