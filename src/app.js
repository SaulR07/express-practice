/**
 * Class of configuration for application
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */

'use strict'

const config = require("./config");
const express = require('express');
const app = express();

//Load routers
const adminRouter = require("./routes/IndexRoute");

//Load middlewares
const middleware = require('./middleware/GeneralMiddleware');

app.use(middleware.logger);
app.use("/", adminRouter);
app.use(middleware.pageNotFound);
app.use(middleware.error);

module.exports = app;