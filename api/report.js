var mongoose = require('mongoose');

var reportSchema = new mongoose.Schema({
  type : {type : String, required : true},
  number : {type : Number, required : true},
  location : {
    name : {type : String, required : true},
    coordinates : {type : [Number], index : '2dsphere', required : true},
  },
  description : {type : String, required : true},
  timestamp : {type : String, required : true},
  user : {type : String, required : true},
  waterType : {type : String, required : true},
  waterCondition : {type : String, required : true},
  virusPPM : Number,
  contaminantPPM : Number
});

module.exports = mongoose.model('Report', reportSchema);