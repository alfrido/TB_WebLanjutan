var moment = require('moment'),
	handler, 
	home,
	admin,
	newArticle,
	article,
	menandai,
	disetujui,
	tdksetujui,
	pengaturan,
	komentar

home = function(req, res){
	res.render('indek.html');
};
fb = function(req, res){
	res.render('fb.html');
};
admin = function(req, res){
	res.render('template/admin/index.html');
};
newArticle = function(req, res){
	res.render('template/admin/new-article.html');
};
article = function(req, res){
	res.render('template/admin/articles.html');
};
menandai = function(req, res){
	res.render('template/admin/tags.html');
};
disetujui = function(req, res){
	res.render('template/admin/approved.html');
};
tdksetujui = function(req, res){
	res.render('template/admin/unapproved.html');
};
pengaturan = function(req, res){
	res.render('template/admin/setting.html');
};
komentar = function(req, res){
	res.render('template/admin/commenters.html');
};

handler = {
	home: home,
	fb: fb,
	admin:admin,
	newArticle:newArticle,
	article:article,
	menandai:menandai,
	disetujui:disetujui,
	tdksetujui:tdksetujui,
	pengaturan:pengaturan,
	komentar:komentar
};


module.exports = handler;