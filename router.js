var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

router = function(app){
	r.get('/', h.home);
	r.get('/fb', h.fb);
	r.get('/test', h.test);
	r.get('/berita', h.berita);
	r.get('/rm1berita', h.rm1berita);
	r.get('/rm2berita', h.rm2berita);
	r.get('/tips', h.tips);
	r.get('/infomhs', h.infomhs);
	r.get('/musik', h.musik);
	r.get('/film', h.film);	
	r.get('/tekno', h.tekno);
	r.get('/lowongan', h.lowongan);
	r.get('/admin',h.admin);
	r.get('/approved',h.approved);
	r.get('/articles',h.articles);
	r.get('/articlebaru',h.articlebaru);
	r.get('/tags',h.tags);
	r.get('/next',h.next);
	r.get('/unapproved',h.unapproved);
	app.use(r);
};
module.exports = router;