/**
 * Functions utils for date.
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

/**
 * Function for conver Date to String
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 * @returns Date string
 */
exports.getDateString = (date = new Date()) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  return date.toLocaleDateString("es-MX", options);
};
