var service = require("../services/Customer_Default_ActivityService")
module.exports.create_Customer = function(req, res) {
  var Customer = req.body;
  service.create_Customer(Customer,function (customer){
    res.status(201);
    res.json(customer);
  });
}
module.exports.update_Customer = function(req, res) {
  var Customer = req.body;
  service.update_Customer(Customer,function (customer){
    res.json(customer);
  });
}
module.exports.search_Customer_for_update = function(req, res) {
  var Customer_id = req.params.id;
  service.search_Customer_for_update(Customer_id,function (customer){
    res.json(customer);
  });
}
module.exports.delete_Customer = function(req, res) {
  var Customer_id = req.params.id;
  service.delete_Customer(Customer_id,function (customer){
    res.status(204);
    res.json(customer);
  });
}
module.exports.get_all_Customer = function(req, res) {
  service.get_all_Customer(function (customer){
    res.json(customer);
  });
}