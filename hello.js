// codigo servidor web nodejs
var http = require("http");
var manejador = function  (solicitud , respuesta) {
	console.log("Nueva Peticion");
	respuesta.end("Hola estamos con nodejs");
};
var servidor = http.createServer(manejador);
servidor.listen(8090);