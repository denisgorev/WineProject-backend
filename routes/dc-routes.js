const mongoose = require("mongoose");
const drConsController = require("../controllers/dr-cons-controller");

const express = require("express");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

console.log("in routes");

router.get("/users/:uid", drConsController.getDCbyUserId);
router.get("/:did", drConsController.getDCbyId);
router.delete("/delete/:did", drConsController.deleteById);

router.post("/", fileUpload.single("photo"), drConsController.createDC);

module.exports = router;
