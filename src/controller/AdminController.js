/**
 * Controller class for administrator requests.
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

/**
 * Function for get index
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
exports.getIndex = (req, res, next) => {
  try {
    res.status(200).send({ message: "Vista obtenida" });
  } catch (exception) {
    console.error(exception.message);
    res.status(500).send({
      message: "Ocurrio un error"
    });
  }
};
