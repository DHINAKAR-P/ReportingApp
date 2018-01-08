var dao = require("../daos/Product_Default_ActivityDao")
module.exports.create_Product = function(Product,callback) {
  dao.create_Product(Product,function (product){
    var id = product._id;
    product.id = id;
    callback(product);
  });
}
module.exports.update_Product = function(Product,callback) {
  dao.update_Product(Product,function (product){
    var id = product._id;
    product.id = id;
    callback(product);
  });
}
module.exports.search_Product_for_update = function(Product_id,callback) {
  dao.search_Product_for_update(Product_id,function (product){
    var id = product._id;
    product.id = id;
    callback(product)
  });
}
module.exports.delete_Product = function(Product_id,callback) {
  dao.delete_Product(Product_id,function (){
    callback();
  });
}
module.exports.get_all_Product = function(callback) {
  dao.get_all_Product(function (list_of_product){
    var count = 0;
     for(var i = 0; i<list_of_product.length; i++){
     var id = list_of_product[i]._id; 
     list_of_product[i].id = id;
     count ++;
     }
     if(list_of_product.length === count)
    callback(list_of_product)
  });
}