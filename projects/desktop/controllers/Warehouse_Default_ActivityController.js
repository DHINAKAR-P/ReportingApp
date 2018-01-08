var service = require("../services/Warehouse_Default_ActivityService")
module.exports.create_Warehouse = function(req, res) {
  var Warehouse = req.body;
  service.create_Warehouse(Warehouse,function (warehouse){
    res.status(201);
    res.json(warehouse);
  });
}
module.exports.update_Warehouse = function(req, res) {
  var Warehouse = req.body;
  service.update_Warehouse(Warehouse,function (warehouse){
    res.json(warehouse);
  });
}
module.exports.search_Warehouse_for_update = function(req, res) {
  var Warehouse_id = req.params.id;
  service.search_Warehouse_for_update(Warehouse_id,function (warehouse){
    res.json(warehouse);
  });
}
module.exports.delete_Warehouse = function(req, res) {
  var Warehouse_id = req.params.id;
  service.delete_Warehouse(Warehouse_id,function (warehouse){
    res.status(204);
    res.json(warehouse);
  });
}
module.exports.get_all_Warehouse = function(req, res) {
  service.get_all_Warehouse(function (warehouse){
    res.json(warehouse);
  });
}