var Customer_schema = require("../models/Customer")

module.exports.create_Customer = function(Customer,callback) {
  var Customer = new Customer_schema(Customer)
  Customer.save( function(Customer, error) {
    if (error) {
      callback(error);
    } else {
      callback(Customer);
    }
  });
}
module.exports.update_Customer = function(Customer,callback) {
  Customer_schema.findOneAndUpdate({ _id:Customer._id },{ $set:Customer},{ upsert: true, new: true },  function(Customer, error) {
    if (error) {
      callback(error);
    } else {
      callback(Customer);
    }
  });
}
module.exports.search_Customer_for_update = function(Customer_id,callback) {
  Customer_schema.findById({ _id: Customer_id },  function(Customer, error) {
    if (error) {
      callback(error);
    } else {
      callback(Customer);
    }
  });
}
module.exports.delete_Customer = function(Customer_id,callback) {
  Customer_schema.findByIdAndRemove(Customer_id,  function(Customer, error) {
    if (error) {
      callback(error);
    } else {
      callback(Customer);
    }
  });
}
module.exports.get_all_Customer = function(callback) {
  Customer_schema.find( function(Customer, error) {
    if (error) {
      callback(error);
    } else {
      callback(Customer);
    }
  });
}