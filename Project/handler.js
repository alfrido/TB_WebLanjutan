var moment = require('moment'),
	handler, 
	home;

home = function(req, res){
	res.render('indek.html');
};
fb = function(req, res){
	res.render('fb.html');
};



handler = {
	home: home,
	fb: fb
	
};

module.exports = handler;