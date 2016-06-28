var user = require('./user'),
	postingan = require('./posting'),
	model;

model = {
	user: user,
	postingan: postingan
};

module.exports = model;