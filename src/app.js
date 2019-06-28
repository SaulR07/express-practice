/**
 * Class of configuration for application
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

"use strict";

const bodyParser = require("body-parser");
const config = require("./config");
const express = require("express");
const app = express();

//Load routers
const adminRouter = require("./routes/IndexRoute");
const calculatorRouter = require("./routes/CalculatorRoute");

//Load middlewares
const middleware = require("./middleware/GeneralMiddleware");

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(middleware.logger);
app.use("/", adminRouter);
app.use("/calculator", calculatorRouter);
app.use(middleware.pageNotFound);
app.use(middleware.error);

app.use(express.static("/public/img", config.headerStaticFiles));

module.exports = app;
