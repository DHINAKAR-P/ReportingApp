var service = require("../services/Invoice_Default_ActivityService")
module.exports.create_Invoice = function(req, res) {
  var Invoice = req.body;
  service.create_Invoice(Invoice,function (invoice){
    res.status(201);
    res.json(invoice);
  });
}
module.exports.update_Invoice = function(req, res) {
  var Invoice = req.body;
  service.update_Invoice(Invoice,function (invoice){
    res.json(invoice);
  });
}
module.exports.search_Invoice_for_update = function(req, res) {
  var Invoice_id = req.params.id;
  service.search_Invoice_for_update(Invoice_id,function (invoice){
    res.json(invoice);
  });
}
module.exports.delete_Invoice = function(req, res) {
  var Invoice_id = req.params.id;
  service.delete_Invoice(Invoice_id,function (invoice){
    res.status(204);
    res.json(invoice);
  });
}
module.exports.get_all_Invoice = function(req, res) {
  service.get_all_Invoice(function (invoice){
    res.json(invoice);
  });
}