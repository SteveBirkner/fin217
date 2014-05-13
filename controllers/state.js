var mongoose = require('mongoose')
  , State = mongoose.model('State');

exports.jsonlist = function(req, res) {

	State.find({}, function(err, states) {
		res.send(states);
	});
}