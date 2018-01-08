var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Warehouse_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   name:{type : String},
   warehouse_section:{type : String},
   location:{type : String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Warehouse_schema.plugin(autoIncrement.plugin,{ model: 'Warehouse', startAt: 1 });
module.exports = mongoose.model('Warehouse', Warehouse_schema);
