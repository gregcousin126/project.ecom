const path = require('path');
var express = require('express');
var app = express();
var http = require('http');
var httpServer = new http.Server(app);

var serverport = 'xotopio.com';
var hostchoice = 1000;

app.use(express.static(__dirname + '/docs'));

app.get('/', function(req, res) { res.sendfile(__dirname + '/index.html'); });

app.listen(`${serverport}`, `${hostchoice}`, function onStart(err) {
	console.info(`\n==> 🌎 Listening on port %s. Open up http://${hostchoice}:${serverport}/ in your browser.\n`, serverport);
	if (err) { console.log(err); }
});