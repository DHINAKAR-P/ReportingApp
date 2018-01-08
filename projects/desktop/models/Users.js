var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Users_schema = new mongoose.Schema({
  
   username:{type : String},
   password:{type : String},
   firstname:{type : String},
   lastname:{type : String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('user', Users_schema);
