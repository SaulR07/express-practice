/**
 * Middleware class for all requests that enter the server.
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

"use strict";

const dateUtils = require("../Utils/DateUtils");

/**
 * Logger for requests
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
exports.logger = (req, res, next) => {
  console.log(
    dateUtils.getDateString() +
      " Petición de entrada " +
      req.originalUrl +
      " tipo " +
      req.method +
      " con los parametros (" +
      JSON.stringify(req.body) +
      ")"
  );
  next();
};

/**
 * Function for requests not found
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
exports.pageNotFound = (req, res) => {
  res.status(404).send("Pagina no encontrada");
};

/**
 * Function for controller erros
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
exports.error = (error, req, res) => {
  console.error(error.stack);
  console.error(error.message);
  res.status(500).send("A ocurrido un error!");
};

/**
 * // TODO: Function to set response headers
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
