var moment = require('moment'),
	handler, 
	home,
	admin,
	commenters,
	setting,
	login;
	home;

home = function(req, res){
	res.render('indek.html');
};
fb = function(req, res){
	res.render('fb.html');
};
tekno=function(req, res){
	res.render('tekno.html');
};
rm1tekno=function(req, res){
	res.render('tekno.html');
};
lowongan=function(req, res){
	res.render('lowongan.html');
};
musik=function(req, res){
	res.render('musik.html');
};
infomhs=function(req, res){
	res.render('infomhs.html');
};
tips=function(req, res){
	res.render('tips.html');
};
film=function(req, res){
	res.render('film.html');
};
berita=function(req, res){
	res.render('berita.html');
};
rm1berita=function(req, res){
	res.render('rm1berita.html');
};
rm2berita=function(req, res){
	res.render('rm2berita.html');
};
approved = function(req, res){
	res.render('template/admin/approved.html');
};
admin = function(req, res){
	res.render('template/admin/index.html');
};
articlebaru = function(req, res){
	res.render('template/admin/new-article.html');
};
articles = function(req, res){
	res.render('template/admin/articles.html');
};
next = function(req, res){
	res.render('template/admin/next.html');
};
tags = function(req, res){
	res.render('template/admin/tags.html');
};
unapproved = function(req, res){
	res.render('template/admin/unapproved.html');
};
test= function(req, res){
	res.render('mongotest.html');
};

setting = function(req, res){
	res.render('template/admin/setting.html');
};
commenters = function(req, res){
	res.render('template/admin/commenters.html');
};
login = function(req, res){
	res.render('template/admin/login.html');
};
home1= function(req, res){
	res.render('template/admin/homeadmin.html');
};


handler = {
	home: home,
	fb: fb,
	next:next ,
	tags:tags ,
	approved:approved,
	admin:admin,
	articlebaru:articlebaru,
	articles:articles,
	unapproved:unapproved,
	tekno:tekno,
	lowongan:lowongan,
	infomhs:infomhs,
	musik:musik,
	tips:tips,
	film:film,
	berita:berita,
	rm1berita:rm1berita,
	rm2berita:rm2berita
	test:test,
	rm1tekno:rm1tekno
<<<<<<< HEAD


=======
	commenters:commenters,
	setting:setting,
	login:login,
	home1:home1
>>>>>>> b58605230a235ae36bd3c6c881640e35ffb9d79a
	
};

module.exports = handler;