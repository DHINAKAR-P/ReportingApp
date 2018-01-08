var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/Customer_Default_Activity", routers.Customer_Default_ActivityRouter);
api.use("/Warehouse_Default_Activity", routers.Warehouse_Default_ActivityRouter);
api.use("/Product_Default_Activity", routers.Product_Default_ActivityRouter);
api.use("/ShippingCompany_Default_Activity", routers.ShippingCompany_Default_ActivityRouter);
api.use("/Invoice_Default_Activity", routers.Invoice_Default_ActivityRouter);

api.use("/Jsreport", routers.Jsreport);

module.exports = api;