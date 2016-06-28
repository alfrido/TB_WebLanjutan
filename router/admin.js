var express = require('express'),
	r = express.Router(),
	h = require('../handler').admin,
	auth = require('../auth'),
	MongoClient = require('mongodb').MongoClient,
	mongoose=require("mongoose"),
	Postingan = require('../model').postingan,
	db,
	router;


MongoClient.connect('mongodb://data:12345@ds023634.mlab.com:23634/tenomed', function(err, database) {
  	if (err) return console.log(err)
  	db = database;
})

router = function(app){
	r.get('/admin',h.admin);
	r.get('/approved',h.approved);
	r.get('/articles',h.articles);
	r.get('/articlebaru',h.articlebaru);
	r.get('/tags',h.tags);
	r.get('/next',h.next);
	r.get('/unapproved',h.unapproved);
	r.get('/commenters',h.commenters);
	r.get('/setting',h.setting);
	r.get('/login', h.login);
	r.get('/home', h.home1);
	app.use(r);
};
module.exports = router;
