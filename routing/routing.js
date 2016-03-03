var express = require("express");

var app = express();
app.set("view engine", "jade");
/*
verbos http GET | POST | PUT | PATCH | DELETE
REST

*/
app.get("/" , function(req , res) {
  // body...
  res.render("index");
});
app.post("/" , function(req , res) {
	// redirecciona a una vista
  res.render("form");
});
app.get("/:nombre" , function(req , res) {
	console.log(req.params.nombre);
	// redirecciona a una vista
  res.render("form", {nombre:req.params.nombre});
});


app.listen(8091);
