var express = require('express'),
	r = express.Router(),
	h = require('../handler').admin,
	auth = require('../auth'),
	MongoClient = require('mongodb').MongoClient,
	mongoose=require("mongoose"),
	Postingan = require('../model').postingan,
	db,
	router;


MongoClient.connect('mongodb://user1:user1@ds023213.mlab.com:23213/projectfahridb', function(err, database) {
 
  	if (err) return console.log(err)
  	db = database;
})

router = function(app){
	r.get('/admin',h.admin);

	r.post('/save',
		(req, res) => {
			db.collection('data').save(req.body,(err, result) => {
				if (err) return console.log(err);
				//renders index.ejs
				console.log('saved to database');
				res.redirect('/');
			})
		});
	r.post('/AddArticle',
		(req, res) => {
			db.collection('Article').save(req.body,(err, result) => {
				if (err) return console.log(err);
				//renders index.ejs
				console.log('saved to database');
				res.redirect('/home');
			})
		});
	app.get('/home', (req, res) => {
  db.collection('Article').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('./admin/homeadmin.html', {Article: result})
  })
});
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
