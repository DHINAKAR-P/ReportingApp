var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var ShippingCompany_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   comapnyname:{type : String},
   companylocatoin:{type : String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
ShippingCompany_schema.plugin(autoIncrement.plugin,{ model: 'ShippingCompany', startAt: 1 });
module.exports = mongoose.model('ShippingCompany', ShippingCompany_schema);
