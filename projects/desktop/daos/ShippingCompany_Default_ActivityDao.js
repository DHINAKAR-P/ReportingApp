var ShippingCompany_schema = require("../models/ShippingCompany")

module.exports.create_ShippingCompany = function(ShippingCompany,callback) {
  var ShippingCompany = new ShippingCompany_schema(ShippingCompany)
  ShippingCompany.save( function(ShippingCompany, error) {
    if (error) {
      callback(error);
    } else {
      callback(ShippingCompany);
    }
  });
}
module.exports.update_ShippingCompany = function(ShippingCompany,callback) {
  ShippingCompany_schema.findOneAndUpdate({ _id:ShippingCompany._id },{ $set:ShippingCompany},{ upsert: true, new: true },  function(ShippingCompany, error) {
    if (error) {
      callback(error);
    } else {
      callback(ShippingCompany);
    }
  });
}
module.exports.search_ShippingCompany_for_update = function(ShippingCompany_id,callback) {
  ShippingCompany_schema.findById({ _id: ShippingCompany_id },  function(ShippingCompany, error) {
    if (error) {
      callback(error);
    } else {
      callback(ShippingCompany);
    }
  });
}
module.exports.delete_ShippingCompany = function(ShippingCompany_id,callback) {
  ShippingCompany_schema.findByIdAndRemove(ShippingCompany_id,  function(ShippingCompany, error) {
    if (error) {
      callback(error);
    } else {
      callback(ShippingCompany);
    }
  });
}
module.exports.get_all_ShippingCompany = function(callback) {
  ShippingCompany_schema.find( function(ShippingCompany, error) {
    if (error) {
      callback(error);
    } else {
      callback(ShippingCompany);
    }
  });
}