var express = require('express');
var app = express();

app.use(express.static('dist'));

app.listen(8080, function() {
	console.log('Button ready for pressing at http://localhost:8080.');
});