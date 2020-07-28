"use strict";

var express = require('express');

var app = express();

var path = require('path');

var PORT = process.env.HTTP_PORT || 3000;
app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.get('/', function (req, res) {
  res.send('flowers smell nice');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    color: 'Blue-ish'
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
