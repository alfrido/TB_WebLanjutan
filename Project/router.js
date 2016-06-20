var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

router = function(app){
	r.get('/', h.home);
	r.get('/fb', h.fb);
	app.use(r);
};
module.exports = router;