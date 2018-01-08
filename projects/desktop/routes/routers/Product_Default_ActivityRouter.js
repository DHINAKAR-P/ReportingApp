var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Product_Default_ActivityController")
router.post("/Product", controller.create_Product);
router.get("/Product/:id", controller.search_Product_for_update);
router.put("/Product", controller.update_Product);
router.delete("/Product/:id", controller.delete_Product);
router.get("/Product", controller.get_all_Product);

module.exports = router;