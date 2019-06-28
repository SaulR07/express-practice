/**
 * Class validating data types
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

"use strict";

/**
 * Method for validate if it is integer
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 * @param val data to evulate
 * @retruns true = is integer, false = not is integer
 */
module.exports.isInteger = val => {
  if (!isNaN(val)) {
    if (Number.isInteger(val)) {
      return true;
    }
  }
  return false;
};
