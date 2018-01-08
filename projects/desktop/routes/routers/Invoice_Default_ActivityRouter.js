var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Invoice_Default_ActivityController")
router.post("/Invoice", controller.create_Invoice);
router.get("/Invoice/:id", controller.search_Invoice_for_update);
router.put("/Invoice", controller.update_Invoice);
router.delete("/Invoice/:id", controller.delete_Invoice);
router.get("/Invoice", controller.get_all_Invoice);

module.exports = router;