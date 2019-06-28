/**
 * Controller class for administrator requests.
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
"use strict";

var path = require("path");

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

/**
 * Function that file response
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
exports.getImage = (req, res, next) => {
  try {
    let urlImageFolder = path.join(__dirname, "..", "public/img/");
    let nameImage = "a.jpg";
    res.status(200).sendFile(urlImageFolder + nameImage);
  } catch (exception) {
    console.error(exception.message);
    res.status(500).send("Ocurrio un problema");
  }
};
