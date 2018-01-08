var Warehouse_schema = require("../models/Warehouse")

module.exports.create_Warehouse = function(Warehouse,callback) {
  var Warehouse = new Warehouse_schema(Warehouse)
  Warehouse.save( function(Warehouse, error) {
    if (error) {
      callback(error);
    } else {
      callback(Warehouse);
    }
  });
}
module.exports.update_Warehouse = function(Warehouse,callback) {
  Warehouse_schema.findOneAndUpdate({ _id:Warehouse._id },{ $set:Warehouse},{ upsert: true, new: true },  function(Warehouse, error) {
    if (error) {
      callback(error);
    } else {
      callback(Warehouse);
    }
  });
}
module.exports.search_Warehouse_for_update = function(Warehouse_id,callback) {
  Warehouse_schema.findById({ _id: Warehouse_id },  function(Warehouse, error) {
    if (error) {
      callback(error);
    } else {
      callback(Warehouse);
    }
  });
}
module.exports.delete_Warehouse = function(Warehouse_id,callback) {
  Warehouse_schema.findByIdAndRemove(Warehouse_id,  function(Warehouse, error) {
    if (error) {
      callback(error);
    } else {
      callback(Warehouse);
    }
  });
}
module.exports.get_all_Warehouse = function(callback) {
  Warehouse_schema.find( function(Warehouse, error) {
    if (error) {
      callback(error);
    } else {
      callback(Warehouse);
    }
  });
}