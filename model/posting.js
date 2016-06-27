var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var posting_schema = new Schema({
	judulpost: String,
	isi: String,
	id: String,
	type: String
});

module.export = mongoose.model('posting', posting_schema);