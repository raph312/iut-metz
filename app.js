/**
 * Module dependencies.
 */

var express = require('express');

var host = "localhost";
var port = "27017";
var database = "IUT-METZ"
var databaseUrl = host+":"+port+"/"+database; 
var collections = ["todos"];
var db = require("mongojs").connect(databaseUrl, collections);


var app = express();
app.use(express.bodyParser());

app.get('/todo/:id', function(request, response) {
	db.todos.find({"_id":request.params.id},function(err,todo){
		console.log(request.params.toto);
		console.log(todo);
		response.send(todo);
	});
});

app.post("/todo",function(request, response){
	console.log("J'ai eu un post!");
	console.log(request.body);
	var todo = {};
	todo = request.body;
	todo = db.todos.insert(todo);
	console.log("Nouveau todo enregistré");
});

app.listen(8080);
console.log('Express server listening on port 8080');