var express = require("express");

var app = express();
app.set("view engine", "jade");
app.get("/" , function(req , res) {
  // body...
  res.render("index",{hola: "Hola EdgarDuarte"});
});

app.listen(8091);
