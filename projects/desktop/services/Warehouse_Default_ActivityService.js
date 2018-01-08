var dao = require("../daos/Warehouse_Default_ActivityDao")
module.exports.create_Warehouse = function(Warehouse,callback) {
  dao.create_Warehouse(Warehouse,function (warehouse){
    var id = warehouse._id;
    warehouse.id = id;
    callback(warehouse);
  });
}
module.exports.update_Warehouse = function(Warehouse,callback) {
  dao.update_Warehouse(Warehouse,function (warehouse){
    var id = warehouse._id;
    warehouse.id = id;
    callback(warehouse);
  });
}
module.exports.search_Warehouse_for_update = function(Warehouse_id,callback) {
  dao.search_Warehouse_for_update(Warehouse_id,function (warehouse){
    var id = warehouse._id;
    warehouse.id = id;
    callback(warehouse)
  });
}
module.exports.delete_Warehouse = function(Warehouse_id,callback) {
  dao.delete_Warehouse(Warehouse_id,function (){
    callback();
  });
}
module.exports.get_all_Warehouse = function(callback) {
  dao.get_all_Warehouse(function (list_of_warehouse){
    var count = 0;
     for(var i = 0; i<list_of_warehouse.length; i++){
     var id = list_of_warehouse[i]._id; 
     list_of_warehouse[i].id = id;
     count ++;
     }
     if(list_of_warehouse.length === count)
    callback(list_of_warehouse)
  });
}