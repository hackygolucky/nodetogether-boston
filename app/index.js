// teach our app how to GET
var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send('oh hai!');
})

module.exports = app;
