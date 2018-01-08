var dao = require("../daos/Invoice_Default_ActivityDao")
module.exports.create_Invoice = function(Invoice,callback) {
  dao.create_Invoice(Invoice,function (invoice){
    var id = invoice._id;
    invoice.id = id;
    callback(invoice);
  });
}
module.exports.update_Invoice = function(Invoice,callback) {
  dao.update_Invoice(Invoice,function (invoice){
    var id = invoice._id;
    invoice.id = id;
    callback(invoice);
  });
}
module.exports.search_Invoice_for_update = function(Invoice_id,callback) {
  dao.search_Invoice_for_update(Invoice_id,function (invoice){
    var id = invoice._id;
    invoice.id = id;
    callback(invoice)
  });
}
module.exports.delete_Invoice = function(Invoice_id,callback) {
  dao.delete_Invoice(Invoice_id,function (){
    callback();
  });
}
module.exports.get_all_Invoice = function(callback) {
  dao.get_all_Invoice(function (list_of_invoice){
    var count = 0;
     for(var i = 0; i<list_of_invoice.length; i++){
     var id = list_of_invoice[i]._id; 
     list_of_invoice[i].id = id;
     count ++;
     }
     if(list_of_invoice.length === count)
    callback(list_of_invoice)
  });
}