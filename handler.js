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
admin = function(req, res){
	res.render('template/admin/index.html');
}



handler = {
	home: home,
	fb: fb,
	admin:admin
	
};

module.exports = handler;