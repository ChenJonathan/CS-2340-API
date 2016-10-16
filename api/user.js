var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name : {type : String, required : true},
  pass : {type : String, required : true},
  auth : {type : String, required : true},
  email : {type : String, required : true},
  phone : {type : String, required : true},
  address : {type : String, required : true}
});

module.exports = mongoose.model('User', userSchema);