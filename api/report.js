var mongoose = require('mongoose');

var reportSchema = new mongoose.Schema({
  type : {type : String, required : true}
  location : {type : String, required : true},
  description : {type : String, required : true},
  timestamp : {type : String, required : true},
  user : {type : String, required : true},
  waterType : String,
  waterCondition : String,
  overallCondition : String,
  virusPPM : Number,
  contaminantPPM : Number
});

module.exports = mongoose.model('Report', reportSchema);