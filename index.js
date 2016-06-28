var express = require('express'),
	middleware = require('./middleware'),
	MongoClient = require('mongodb').MongoClient,
	mongoose=require("mongoose"),
	app = express(),
	db;
	
middleware(app);

app.use('/', express.static(__dirname + '/public/assets'));



MongoClient.connect('mongodb://user1:user1@ds023213.mlab.com:23213/projectfahridb', function(err, database) {
  	if (err) return console.log(err);
  	db = database;
	app.set('port', process.env.PORT || 1231);
	app.listen(app.get('port'), function(){
		console.log('Server Hidup Port : ' + app.get('port'));
	});
})


