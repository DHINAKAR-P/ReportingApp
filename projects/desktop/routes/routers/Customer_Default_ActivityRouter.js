var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Customer_Default_ActivityController")
router.post("/Customer", controller.create_Customer);
router.get("/Customer/:id", controller.search_Customer_for_update);
router.put("/Customer", controller.update_Customer);
router.delete("/Customer/:id", controller.delete_Customer);
router.get("/Customer", controller.get_all_Customer);

module.exports = router;