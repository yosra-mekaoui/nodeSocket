const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const chatController = require('../controller/chatController');
const validate = require('../midill/validate')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/getAll", chatController.getall);
router.get("/getbyid/:id", chatController.getbyid);
router.delete("/delete/:id", chatController.Delete);

router.put("/update/:id", chatController.update);
router.post("/new", chatController.add);

module.exports = router;
