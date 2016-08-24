var express = require('express');
var app = express();

var port = '8080';
var host = '0.0.0.0';

app.use(require('./app'));
app.listen(port, host);

console.log('Server running %s:%d...', host, port);

module.exports = app;
