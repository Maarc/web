//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');
var app     = express();
var eps     = require('ejs');

app.engine('html', require('ejs').renderFile);

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/', function (req, res) {
  res.render('index.html', { pageCountMessage : null});
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on ' + ip + ':' + port);
