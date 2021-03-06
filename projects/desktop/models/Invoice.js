var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Invoice_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   shippingdate:{type : Date, default: Date.now()},
   product:{type : String},
   warehouse:{type : String},
   customer:{type : String},
   shippingcomapny:{type : String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Invoice_schema.plugin(autoIncrement.plugin,{ model: 'Invoice', startAt: 1 });
module.exports = mongoose.model('Invoice', Invoice_schema);
