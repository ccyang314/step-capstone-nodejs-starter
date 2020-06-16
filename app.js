/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars')

var app = express();

// Environments configs. 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.urlencoded());
app.use('/static', express.static('public'));

// View configs.
var index = require('./routes/index');

// Route path configs.
app.get('/', index.view, function (req, res) {
  res.send(req.params)
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
