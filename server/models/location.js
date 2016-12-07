var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var locationSchema = new Schema({
  id: Number,
  name: String,
  coordinates: String
});


module.exports = mongoose.model('Location', locationSchema);
