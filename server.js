var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var emitting = false;

app.use(express.static(__dirname));

app.get('/',function(req,res){
	res.sendFile(__dirname + "\\zapp.js");
	res.sendFile(__dirname + "\\index.html");
});

io.on('connection',function(socket){
	console.log("Hello!");

	var broadcast = setInterval(function(){
		socket.emit('whereAreYou',{});
	},1000);

	socket.on('iAmHere',function(data){
		console.log("I hear you");
	});

});
http.listen(8080,function(){
	console.log("listening *:8080");
});


