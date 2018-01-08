var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Warehouse_Default_ActivityController")
router.post("/Warehouse", controller.create_Warehouse);
router.get("/Warehouse/:id", controller.search_Warehouse_for_update);
router.put("/Warehouse", controller.update_Warehouse);
router.delete("/Warehouse/:id", controller.delete_Warehouse);
router.get("/Warehouse", controller.get_all_Warehouse);

module.exports = router;