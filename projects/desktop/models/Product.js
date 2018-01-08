var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Product_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   name:{type : String},
   price:{type : Number},
   category:{type : String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Product_schema.plugin(autoIncrement.plugin,{ model: 'Product', startAt: 1 });
module.exports = mongoose.model('Product', Product_schema);
