/**
 * Class router for request of calculator
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

"use strict";

const router = require("express").Router();
const calculatorController = require("../Controller/CalculatorController");

router.post("/add", calculatorController.sum);
router.post("/less", calculatorController.subtraction);

module.exports = router;
