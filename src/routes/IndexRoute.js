/**
 * TODO: Class Description
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

"use strict";

const express = require("express");
const router = express.Router();
const admincontroller = require("../controller/AdminController");

router.get("/", admincontroller.getIndex);
router.get("/img", admincontroller.getImage);

module.exports = router;
