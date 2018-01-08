var express = require("express");
var router = express.Router();
var controller = require("../../controllers/JsreportController")

router.get("/getalluser", controller.get_all_Users);
router.post("/adduser", controller.savejseportuser);
router.get("/get/:reportname",controller.getjsreport_for_user);
router.get("/getreport/:username",controller.getreport_by_user);
router.post("/updateuser/",controller.updatejsreportuser);

module.exports = router;

