// codigo del servidor leyendo un archivo html
var http = require("http"),
		fs   = require("fs");

http.createServer(function(req , res){
	fs.readFile("./index.html",function(err ,html) {
    var html_string = html.toString();
    // Expresion regular que busca  en el html una {x}    
    var variables = html_string.match(/[^\{\}]+(?=\})/g); 
    var nombre= "Ariser Tempest";
    for(var i = variables.length - 1; i>=0 ; i--){
    /*Ejecutamos como codigo javascript
    para obtener el valor de la variable*/    
      var value = eval(variables[i]);
    // reemplazar el  contenido de las llaves {x} por el valor correspondiente    
    html_string = html_string.replace("{"+variables[i]+"}",value);    
    };
     //mandamos el contenido   
	res.writeHeader(200 , {"Content-Type":"text/html"});
	res.write(html_string);
	res.end();
	});

	}).listen(8092);