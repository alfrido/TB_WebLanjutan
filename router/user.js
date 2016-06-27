var express = require('express'),
	r = express.Router(),
	h = require('../handler').user,
	router;

router = function(app){
	r.get('/', h.home);
	r.get('/fb', h.fb);
	r.get('/berita', h.berita);
	r.get('/rm1berita', h.rm1berita);
	r.get('/rm2berita', h.rm2berita);
	r.get('/rm3berita', h.rm3berita);
	r.get('/tips', h.tips);
	r.get('/infomhs', h.infomhs);
	r.get('/musik', h.musik);
	r.get('/film', h.film);	
	r.get('/tekno', h.tekno);
	r.get('/rm1tekno', h.rm1tekno);
	r.get('/lowongan', h.lowongan);
	/*r.get('/logout', function (req, res) {
		req.session.user = "";
	  res.redirect('/');
	});

	r.post('/check', h.check);*/
	app.use(r);
};
module.exports = router;