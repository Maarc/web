//  OpenShift sample Node application
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var path = require('path');
var express  = require('express');
// static file compression middleware
var compress = require('compression');
// middleware that allows you to parse request body, json, etc.
var bodyParser = require('body-parser');
// middleware to allow the general use of PUT and DELETE verbs
var methodOverride = require('method-override');
// logging middleware
var morgan  = require('morgan');
// middleware to return X-Response-Time with a response
var responseTime = require('response-time');
// middleware to serve a favicon prior to all other assets/routes
var favicon = require('serve-favicon');

var app = express();

app.use(morgan('dev'));
app.use(responseTime());

app.use(bodyParser());
app.use(methodOverride());

app.use(compress());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on ' + ip + ':' + port);
