var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * State Info Schema
 */
var StateSchema = new Schema({
  "State": String,
  'Type of Crime': String,
  'Crime': String,
  'Year': String,
  'Count': String,
});

mongoose.model('State', StateSchema);