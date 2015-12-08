var express = require("express");
var app = express();
app.use('/static', express.static('public'));

app.get('/',function(req, res){
	res.send('<a href="http://localhost:3000/static/index.html">Email application</a>');
});

var server = app.listen(3000, '127.0.0.1', function(){
	var host = server.address().address;
 	var port = server.address().port;
	console.log("Server listening : ", host, ":", port);
});
