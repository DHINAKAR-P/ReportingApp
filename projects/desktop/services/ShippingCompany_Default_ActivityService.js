var dao = require("../daos/ShippingCompany_Default_ActivityDao")
module.exports.create_ShippingCompany = function(ShippingCompany,callback) {
  dao.create_ShippingCompany(ShippingCompany,function (shippingcompany){
    var id = shippingcompany._id;
    shippingcompany.id = id;
    callback(shippingcompany);
  });
}
module.exports.update_ShippingCompany = function(ShippingCompany,callback) {
  dao.update_ShippingCompany(ShippingCompany,function (shippingcompany){
    var id = shippingcompany._id;
    shippingcompany.id = id;
    callback(shippingcompany);
  });
}
module.exports.search_ShippingCompany_for_update = function(ShippingCompany_id,callback) {
  dao.search_ShippingCompany_for_update(ShippingCompany_id,function (shippingcompany){
    var id = shippingcompany._id;
    shippingcompany.id = id;
    callback(shippingcompany)
  });
}
module.exports.delete_ShippingCompany = function(ShippingCompany_id,callback) {
  dao.delete_ShippingCompany(ShippingCompany_id,function (){
    callback();
  });
}
module.exports.get_all_ShippingCompany = function(callback) {
  dao.get_all_ShippingCompany(function (list_of_shippingcompany){
    var count = 0;
     for(var i = 0; i<list_of_shippingcompany.length; i++){
     var id = list_of_shippingcompany[i]._id; 
     list_of_shippingcompany[i].id = id;
     count ++;
     }
     if(list_of_shippingcompany.length === count)
    callback(list_of_shippingcompany)
  });
}