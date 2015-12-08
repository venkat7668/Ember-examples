var express = require("express");
var app = express();
//app.use('/static', express.static('public'));
app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/templates', express.static('public/templates'));
app.use('/images', express.static('public/images'));

app.get('/*',function(req, res){
	res.sendFile(__dirname+"/public/index.html");
});

var server = app.listen(3000, '127.0.0.1', function(){
	var host = server.address().address;
 	var port = server.address().port;
	console.log("Server listening : ", host, ":", port);
});
