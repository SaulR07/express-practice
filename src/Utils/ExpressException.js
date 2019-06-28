/**
 * @description Class of exception
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

"use strict";

class ExpressException {
  /**
   * @description Constructor of class
   * @param {string} message - Message of exception
   */
  constructor(message) {
    let error = new Error();
    error.name = "ExpressException";
    error.message = message;

    return error;
  }
}

module.exports = ExpressException;
