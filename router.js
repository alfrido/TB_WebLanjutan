var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

router = function(app){
	r.get('/', h.home);
	r.get('/fb', h.fb);
	r.get('/berita', h.berita);
	r.get('/tips', h.tips);
	r.get('/infomhs', h.infomhs);
	r.get('/musik', h.musik);
	r.get('/film', h.film);	
	r.get('/tekno', h.tekno);
	r.get('/lowongan', h.lowongan);
	r.get('/admin',h.admin);
	app.use(r);
};
module.exports = router;