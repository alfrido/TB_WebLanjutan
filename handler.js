var moment = require('moment'),
	handler, 
	home,
	admin;

home = function(req, res){
	res.render('indek.html');
};
fb = function(req, res){
	res.render('fb.html');
};
tekno=function(req, res){
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
admin = function(req, res){
	res.render('template/admin/index.html');
}



handler = {
	home: home,
	fb: fb,
	admin:admin,
	tekno:tekno,
	lowongan:lowongan,
	infomhs:infomhs,
	musik:musik,
	tips:tips,
	film:film,
	berita:berita

	
};

module.exports = handler;