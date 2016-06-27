var moment = require('moment'),
	user,
	handler,
	home;
home = function(req, res){
	res.render('./user/indek.html');
};
fb = function(req, res){
	res.render('./user/fb.html');
};
tekno=function(req, res){
	res.render('./user/tekno.html');
};
rm1tekno=function(req, res){
	res.render('./user/rm1tekno.html');
};
lowongan=function(req, res){
	res.render('./user/lowongan.html');
};
musik=function(req, res){
	res.render('./user/musik.html');
};
infomhs=function(req, res){
	res.render('./user/infomhs.html');
};
tips=function(req, res){
	res.render('./user/tips.html');
};
film=function(req, res){
	res.render('./user/film.html');
};
berita=function(req, res){
	res.render('./user/berita.html');
};
rm1berita=function(req, res){
	res.render('./user/rm1berita.html');
};
rm2berita=function(req, res){
	res.render('./user/rm2berita.html');
};
rm3berita=function(req, res){
	res.render('./user/rm3berita.html');
};
rm1film=function(req, res){
	res.render('./user/rm1film.html');
};
rm2film=function(req, res){
	res.render('./user/rm2film.html');
};
rm3film=function(req, res){
	res.render('./user/rm3film.html');
};
rm1info=function(req, res){
	res.render('./user/rm1info.html');
};
rm2info=function(req, res){
	res.render('./user/rm2info.html');
};
rm3info=function(req, res){
	res.render('./user/rm3info.html');
};

/*login = function(req, res){
	user = req.session.user || "";
	if (user === 'admin'){
		res.redirect('/admin');
		console.log("telah masuk");
	}
	else
		res.render('./user/login.html');
};

check = function(req, res){
	var username = req.body.username;
	var pass = req.body.password;
	if (username==="admin" && pass==="admin"){
		req.session.user = username;
		req.session.admin = true;
		res.redirect('/admin');

	}else{
		res.redirect('/login');
	};
};*/

handler = {
	home: home,
	fb: fb,
	tekno:tekno,
	rm1tekno:rm1tekno,
	lowongan:lowongan,
	infomhs:infomhs,
	musik:musik,
	tips:tips,
	film:film,
	berita:berita,
	rm1berita:rm1berita,
	rm2berita:rm2berita,
	rm3berita:rm3berita,
	rm1film:rm1film,
	rm2film:rm2film,
	rm3film:rm3film,
	rm1info:rm1info,
	rm2info:rm2info,
	rm3info:rm3info
	/*login: login,
	check: check*/
};

module.exports = handler;