var moment = require('moment'),
	handler, 
	Objectid=require('mongodb').Objectid,
	MongoClient = require('mongodb').MongoClient,

	admin;



MongoClient.connect('mongodb://user1:user1@ds023213.mlab.com:23213/projectfahridb', function(err, database) {
 
  	if (err) return console.log(err)
  	db = database;
});

/*var editPost=function(req,res){
	db.collection('post').findOne{
		"_id":Objectid(req.params.id)
	},function(err,result){
		if(err) return res.send("error");
		else{
			var data=result;
			res.render("./admin/edit disini")
		}
	}
};*/

approved = function(req, res){
	res.render('./admin/approved.html');
};
admin = function(req, res){
	res.render('./admin/index.html');
};
articlebaru = function(req, res){
	res.render('./admin/new-article.html');
};
articles = function(req, res){
	res.render('./admin/articles.html');
};
next = function(req, res){
	res.render('./admin/next.html');
};
tags = function(req, res){
	res.render('./admin/tags.html');
};
unapproved = function(req, res){
	res.render('./admin/unapproved.html');
};

setting = function(req, res){
	res.render('./admin/setting.html');
};
commenters = function(req, res){
	res.render('./admin/commenters.html');
};
login = function(req, res){
	res.render('./admin/login.html');
};
home1= function(req, res){
	res.render('./admin/homeadmin.html');
};

handler = {
	next:next ,
	tags:tags ,
	approved:approved,
	admin:admin,
	articlebaru:articlebaru,
	articles:articles,
	unapproved:unapproved,
	commenters:commenters,
	setting:setting,
	login:login,
	home1:home1
};

module.exports = handler;