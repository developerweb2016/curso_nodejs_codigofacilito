function view(html, variables) {

      for(var i = variables.length - 1; i>=0 ; i--){
      /*Ejecutamos como codigo javascript
      para obtener el valor de la variable*/
        var variable = variables[i];
      // reemplazar el  contenido de las llaves {x} por el valor correspondiente
      html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);
      };


}
module.exports.parse = view;
