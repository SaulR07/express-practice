/**
 * TODO: Class Description
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

'use stric'

const express = require("express");
const router = express.Router();
const controller = require("../controller/AdminController");

router.get("/", controller.getIndex);

module.exports = router;