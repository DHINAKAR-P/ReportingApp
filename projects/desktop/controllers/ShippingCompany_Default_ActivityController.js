var service = require("../services/ShippingCompany_Default_ActivityService")
module.exports.create_ShippingCompany = function(req, res) {
  var ShippingCompany = req.body;
  service.create_ShippingCompany(ShippingCompany,function (shippingcompany){
    res.status(201);
    res.json(shippingcompany);
  });
}
module.exports.update_ShippingCompany = function(req, res) {
  var ShippingCompany = req.body;
  service.update_ShippingCompany(ShippingCompany,function (shippingcompany){
    res.json(shippingcompany);
  });
}
module.exports.search_ShippingCompany_for_update = function(req, res) {
  var ShippingCompany_id = req.params.id;
  service.search_ShippingCompany_for_update(ShippingCompany_id,function (shippingcompany){
    res.json(shippingcompany);
  });
}
module.exports.delete_ShippingCompany = function(req, res) {
  var ShippingCompany_id = req.params.id;
  service.delete_ShippingCompany(ShippingCompany_id,function (shippingcompany){
    res.status(204);
    res.json(shippingcompany);
  });
}
module.exports.get_all_ShippingCompany = function(req, res) {
  service.get_all_ShippingCompany(function (shippingcompany){
    res.json(shippingcompany);
  });
}