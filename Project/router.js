var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

	router =  function(app){
		r.get('/', h.index);
		app.use(r);
	};
	module.exports = router;