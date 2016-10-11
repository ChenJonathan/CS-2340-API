var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  pass: String,
  auth: String,
  email: String,
  phone: String,
  address: String
});

module.exports = mongoose.model('User', userSchema);