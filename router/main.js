module.exports = function(app){

// *********** Routing Logic Here ************** //

app.get("/",function(req,res){
	res.send("<html><head>My Page</head><h1>Welcome to my Page</h1><form action='submit' type='post'><br/><a href='index'>Index Page</a><br/><a href='contact'>Contact Page</a><br/>Name: <input type='text' name='Name'/><br/>Email: <input type='text' name='Email'><br/><br/><input type='submit' value='Submit'/></form></html>");
});

app.get('/submit',function(req,res){
	var name = req.query.Name;
	var email = req.query.Email;
	
	res.send("Welcome " + name + " your email id is "+ email);
});

app.get('/index',function(req,res){
	
	res.render("index.html");
});

app.get('/contact',function(req,res){
	
	res.render("contact.html");
});

}