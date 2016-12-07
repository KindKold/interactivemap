//
var config = require('getconfig');
var mongoose = require('mongoose');
var express = require('express');
var app = express();


mongoose.connect(config.dbURI);
app.use('/', require('./routes').locations);
app.use('/api', require('./api').locations);


app.listen(config.port, function () {
  console.log('Server starting at localhost:3000');
});
