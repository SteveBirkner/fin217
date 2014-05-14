var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

 var LaptopSchema = new Schema({
  cost: Number,
  screen: Number,
  memory: Number,
  drive: Number,
});

var Laptop = mongoose.model('Laptop', LaptopSchema);