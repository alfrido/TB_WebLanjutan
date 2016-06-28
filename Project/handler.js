var handler, index;

index = function(req,res){
	res.render('index.html');
};

handler = {
	index:index
};
module.exports = handler;