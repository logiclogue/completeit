var express = require('express');
var api = require('./src/api');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

 
app.get('/', function (req, res) {
	res.send('Hello World');
});

app.use('/api', api);
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

 
if (app.listen(port)) {
	console.log('Running on port ' + port);
}
