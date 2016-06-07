var router = require('./router'),
	nunjucks  = require('nunjucks'),
	middleware;

	middleware = function(app){
		router(app);
		nunjucks.configure('view', {
			autoescape: true,
			express: app
		});
	};

	module.exports = middleware;