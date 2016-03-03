// codigo del servidor leyendo un archivo html
var http = require("http"),
		fs   = require("fs");

http.createServer(function(req , res){
	fs.readFile("./index.html",function(err ,html) {
	res.writeHeader(200 , {"Content-Type":"application/json"});
	res.write(JSON.stringify({nombre:"Edgar" , username: "MathiasHarom"}));
	res.end();
	});

	}).listen(8091);
