var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Crime Info Schema
 */
var CrimeSchema = new Schema({
  state: String,
  kind: String,
  namecrime: String,
  year: String,
  count: String,
});

var Crime = mongoose.model('Crime', CrimeSchema);