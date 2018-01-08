var dao = require("../daos/Customer_Default_ActivityDao")
module.exports.create_Customer = function(Customer,callback) {
  dao.create_Customer(Customer,function (customer){
    var id = customer._id;
    customer.id = id;
    callback(customer);
  });
}
module.exports.update_Customer = function(Customer,callback) {
  dao.update_Customer(Customer,function (customer){
    var id = customer._id;
    customer.id = id;
    callback(customer);
  });
}
module.exports.search_Customer_for_update = function(Customer_id,callback) {
  dao.search_Customer_for_update(Customer_id,function (customer){
    var id = customer._id;
    customer.id = id;
    callback(customer)
  });
}
module.exports.delete_Customer = function(Customer_id,callback) {
  dao.delete_Customer(Customer_id,function (){
    callback();
  });
}
module.exports.get_all_Customer = function(callback) {
  dao.get_all_Customer(function (list_of_customer){
    var count = 0;
     for(var i = 0; i<list_of_customer.length; i++){
     var id = list_of_customer[i]._id; 
     list_of_customer[i].id = id;
     count ++;
     }
     if(list_of_customer.length === count)
    callback(list_of_customer)
  });
}