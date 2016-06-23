var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

router = function(app){
	r.get('/', h.home);
	r.get('/fb', h.fb);
	r.get('/admin',h.admin);
	app.use(r);
};
module.exports = router;