
/**
 * Module dependencies.
 */
require('newrelic');
var express = require('express');
var connect = require('connect');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(connect.favicon());
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());
app.use(connect.methodOverride());
//app.use(app.router);
app.use(connect.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(connect.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
