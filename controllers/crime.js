var mongoose = require('mongoose')
  , Crime = mongoose.model('Crime');

exports.list = function(req, res) {
	Crime.find({}, function(err, crimes) {
		res.render('courses', {
			title: 'Crime States',
			crimes: crimes
		});
	});
}
exports.jsonlist = function(req, res) {

	Crime.find({}, function(err, crimes) {
		res.send(crimes);
	});
}