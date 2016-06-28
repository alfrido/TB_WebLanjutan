var express = require('express'),
	r = express.Router(),
	h = require('../handler').user,
	router;

router = function(app){
	r.post('/PostUser',
		(req, res) => {
			db.collection('PostUser').save(req.body,(err, result) => {
				if (err) return console.log(err);
				//renders index.ejs
				console.log('saved to database');
				res.redirect('/profile');
			})
		});
	r.get('/', h.home);
	r.get('/fb', h.fb);
	r.get('/berita', h.berita);
	r.get('/rm1berita', h.rm1berita);
	r.get('/rm2berita', h.rm2berita);		
	r.get('/rm3berita', h.rm3berita);
	r.get('/rm3film', h.rm3film);
	r.get('/rm1film', h.rm1film);
	r.get('/rm2film', h.rm2film);
	r.get('/rm1info', h.rm1info);
	r.get('/rm2info', h.rm2info);
	r.get('/rm3info', h.rm3info);
	r.get('/rm1kerja', h.rm1kerja);
	r.get('/rm2kerja', h.rm2kerja);
	r.get('/rm3kerja', h.rm3kerja);
	r.get('/rm1musik', h.rm1musik);
	r.get('/rm2musik', h.rm2musik);
	r.get('/rm3musik', h.rm3musik);
	r.get('/rm1tips', h.rm1tips);
	r.get('/rm2tips', h.rm2tips);
	r.get('/rm3tips', h.rm3tips);
	r.get('/tips', h.tips);
	r.get('/infomhs', h.infomhs);
	r.get('/musik', h.musik);
	r.get('/film', h.film);	
	r.get('/tekno', h.tekno);
	r.get('/rm1tekno', h.rm1tekno);
	r.get('/rm2tekno', h.rm2tekno);
	r.get('/rm3tekno', h.rm3tekno);
	r.get('/lowongan', h.lowongan);
	r.get('/profile', h.Profile);
	/*r.get('/logout', function (req, res) {
		req.session.user = "";
	  res.redirect('/');
	});

	r.post('/check', h.check);*/
	app.use(r);
};
module.exports = router;