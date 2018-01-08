var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Jsreport_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   reportname:{type : String},
   username: {type : String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Jsreport_schema.plugin(autoIncrement.plugin,{ model: 'jsreport', startAt: 1 });
module.exports = mongoose.model('jsreport', Jsreport_schema);
