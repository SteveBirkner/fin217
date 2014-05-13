var mongoose = require('mongoose')
  , Crime = mongoose.model('Crime');

exports.list = function(req, res) {
	Crime.find({year: "2005"}, function(err, crimes) {
		res.render('crimes', {
			title: 'Crime Stats',
			crimes: crimes
		});
	});
}
exports.jsonlist = function(req, res) {

	Crime.find({year: "2005"}, function(err, crimes) {
		res.send(crimes);
	});
}