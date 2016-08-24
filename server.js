var express = require('express');
var app = express();

var rules = require('./app');
app.use(rules);

var port = process.env.PORT || '8080';
var host = process.env.HOST || '0.0.0.0';

app.listen(port, host);

console.log('Server running %s:%d...', host, port);
