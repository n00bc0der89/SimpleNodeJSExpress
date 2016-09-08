var express = require("express");
var app = express();

//***** Routing call ********
var router = require("./router/main");
router(app);
//****** Engine Logic Here ************* //
app.engine('html', require('ejs').renderFile); //Specify view engine 

var server = app.listen(3000,function(){
	console.log("Started server on port 3000 !!!");
});