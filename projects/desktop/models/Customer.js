var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Customer_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   name:{type : String},
   phone:{type : Number},
   address:{type : String},
   city:{type : String},
   pincode:{type : String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Customer_schema.plugin(autoIncrement.plugin,{ model: 'Customer', startAt: 1 });
module.exports = mongoose.model('Customer', Customer_schema);
