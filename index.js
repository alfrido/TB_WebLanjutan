var express = require('express'),
	middleware = require('./middleware'),
	app = express();
	
middleware(app);

app.use('/', express.static(__dirname + '/assets'));

app.set('port', process.env.PORT || 1231);
app.listen(app.get('port'), function(){
	console.log('Server Running : ' + app.get('port'));
});
