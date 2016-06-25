var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

router = function(app){
	r.get('/', h.home);
	r.get('/fb', h.fb);
	r.get('/admin',h.admin);
	r.get('/admin/newArticle',h.newArticle);
	r.get('/admin/article', h.article);
	r.get('/admin/menandai', h.menandai);
	r.get('/admin/disetujui', h.disetujui);
	r.get('/admin/tdksetujui', h.tdksetujui);
	r.get('/admin/pengaturan', h.pengaturan);
	r.get('/admin/komentar', h.komentar);
	app.use(r);
};
module.exports = router;