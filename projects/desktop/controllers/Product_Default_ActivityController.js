var service = require("../services/Product_Default_ActivityService")
module.exports.create_Product = function(req, res) {
  var Product = req.body;
  service.create_Product(Product,function (product){
    res.status(201);
    res.json(product);
  });
}
module.exports.update_Product = function(req, res) {
  var Product = req.body;
  service.update_Product(Product,function (product){
    res.json(product);
  });
}
module.exports.search_Product_for_update = function(req, res) {
  var Product_id = req.params.id;
  service.search_Product_for_update(Product_id,function (product){
    res.json(product);
  });
}
module.exports.delete_Product = function(req, res) {
  var Product_id = req.params.id;
  service.delete_Product(Product_id,function (product){
    res.status(204);
    res.json(product);
  });
}
module.exports.get_all_Product = function(req, res) {
  service.get_all_Product(function (product){
    res.json(product);
  });
}