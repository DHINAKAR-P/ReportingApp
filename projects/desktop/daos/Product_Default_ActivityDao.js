var Product_schema = require("../models/Product")

module.exports.create_Product = function(Product,callback) {
  var Product = new Product_schema(Product)
  Product.save( function(Product, error) {
    if (error) {
      callback(error);
    } else {
      callback(Product);
    }
  });
}
module.exports.update_Product = function(Product,callback) {
  Product_schema.findOneAndUpdate({ _id:Product._id },{ $set:Product},{ upsert: true, new: true },  function(Product, error) {
    if (error) {
      callback(error);
    } else {
      callback(Product);
    }
  });
}
module.exports.search_Product_for_update = function(Product_id,callback) {
  Product_schema.findById({ _id: Product_id },  function(Product, error) {
    if (error) {
      callback(error);
    } else {
      callback(Product);
    }
  });
}
module.exports.delete_Product = function(Product_id,callback) {
  Product_schema.findByIdAndRemove(Product_id,  function(Product, error) {
    if (error) {
      callback(error);
    } else {
      callback(Product);
    }
  });
}
module.exports.get_all_Product = function(callback) {
  Product_schema.find( function(Product, error) {
    if (error) {
      callback(error);
    } else {
      callback(Product);
    }
  });
}