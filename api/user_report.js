var mongoose = require('mongoose');

var userReportSchema = new mongoose.Schema({
  location: String,
  description: String,
  timestamp: String,
  user: String,
  type: String,
  condition: String
});

module.exports = mongoose.model('UserReport', userReportSchema);