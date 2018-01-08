var express = require("express");
var router = express.Router();
var controller = require("../../controllers/ShippingCompany_Default_ActivityController")
router.post("/ShippingCompany", controller.create_ShippingCompany);
router.get("/ShippingCompany/:id", controller.search_ShippingCompany_for_update);
router.put("/ShippingCompany", controller.update_ShippingCompany);
router.delete("/ShippingCompany/:id", controller.delete_ShippingCompany);
router.get("/ShippingCompany", controller.get_all_ShippingCompany);

module.exports = router;