/**
 * Controller class for request of calculator
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

"use strict";

const ExpressException = require("../Utils/ExpressException");

const calculatorService = require("../Service/CalculatorService");
const dataTypeValidator = require("../Validator/DataTypeValidator.js");

/**
 * Method for request sum
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
exports.sum = (req, res) => {
  try {
    let val1 = parseInt(req.body.val1);
    let val2 = parseInt(req.body.val2);

    if (
      !dataTypeValidator.isInteger(val1) ||
      !dataTypeValidator.isInteger(val2)
    ) {
      throw new ExpressException("Los valores introducidos no son enteros");
    }

    let sum = calculatorService.sum(val1, val2);

    res.status(200).send(sum.toString());
  } catch (exception) {
    console.error(exception.stack);
    console.error(exception.message);
    if (exception.name === "ExpressException") {
      res.status(200).send(exception.message);
    } else {
      res.status(500).send("Ocurrio un error al calcular la suma");
    }
  }
};

/**
 * Method for request subtraction
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
exports.subtraction = (req, res) => {
  try {
    let val1 = parseInt(req.body.val1);
    let val2 = parseInt(req.body.val2);

    if (
      !dataTypeValidator.isInteger(val1) ||
      !dataTypeValidator.isInteger(val2)
    ) {
      throw new ExpressException("Los valores introducidos no son enteros");
    }

    let subtraction = calculatorService.subtraction(val1, val2);

    res.status(200).send(subtraction.toString());
  } catch (exception) {
    console.error(exception.stack);
    console.error(exception.message);

    if (exception.name === "ExpressException") {
      res.status(200).send(exception.message);
    } else {
      res.status(500).send("Ocurrio un error al calcular la resta");
    }
  }
};
