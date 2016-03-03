// codigo del servidor leyendo un archivo html
var http = require("http"),
		fs   = require("fs"),
    parser = require("./params_parser.js");

http.createServer(function(req , res){
  var p = parser.parse;
  if (req.url.indexOf("favicon.ico") > 0){   return ;}
	fs.readFile("./index.html",function(err ,html) {
    var html_string = html.toString();

    // Expresion regular que busca  en el html una {x}
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre= "";
var parametros = p(req);


    for(var i = variables.length - 1; i>=0 ; i--){
    /*Ejecutamos como codigo javascript
    para obtener el valor de la variable*/
      var variable = variables[i];
    // reemplazar el  contenido de las llaves {x} por el valor correspondiente
    html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);
    };
     //mandamos el contenido
	res.writeHeader(200 , {"Content-Type":"text/html"});
	res.write(html_string);
	res.end();
	});

	}).listen(8092);
