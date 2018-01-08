var Invoice_schema = require("../models/Invoice")
var Custormer_schema= require("../models/Customer")
var Warehouse_schema = require("../models/Warehouse")
var shippingcompany_schema = require("../models/ShippingCompany")
var producto_schema = require("../models/Product")

module.exports.create_Invoice = function(Invoice,callback) {
  var Invoice = new Invoice_schema(Invoice)
  Invoice.save( function(Invoice, error) {
    if (error) {
      callback(error);
    } else {
      callback(Invoice);
    }
  });
}
module.exports.update_Invoice = function(Invoice,callback) {
  Invoice_schema.findOneAndUpdate({ _id:Invoice._id },{ $set:Invoice},{ upsert: true, new: true },  function(Invoice, error) {
    if (error) {
      callback(error);
    } else {
      callback(Invoice);
    }
  });
}
module.exports.search_Invoice_for_update = function(Invoice_id,callback) {
  Invoice_schema.findById({ _id: Invoice_id },  function(Invoice, error) {
    if (error) {
      callback(error);
    } else {
      callback(Invoice);
    }
  });
}
module.exports.delete_Invoice = function(Invoice_id,callback) {
  Invoice_schema.findByIdAndRemove(Invoice_id,  function(Invoice, error) {
    if (error) {
      callback(error);
    } else {
      callback(Invoice);
    }
  });
}
module.exports.get_all_Invoice = function(callback) {
  Invoice_schema.find( function(Invoice, error) {
    if (error) {
      callback(error);
    } else {
      callback(Invoice);
    }
  }).populate( 'customer').populate("warehouse").populate("product").populate("shippingcomapny");  //[{"customer":Custormer_schema},{"warehouse":Warehouse_schema}]
}