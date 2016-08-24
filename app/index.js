// teach our app how to GET
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.use(express.static('./app/public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: './app/views/layouts'
}))

app.set('views', './app/views');
app.set('view engine', 'handlebars');

var motivations = require('motivations');
var pickOne = require('pick-one');

app.get('/', function(request, response){
  var motivation = pickOne(motivations);
  response.render('motivation', { motivation});
})

module.exports = app;
