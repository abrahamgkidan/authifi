const express = require("express");
// const bodyParser = require("body-parser");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

app.use(express.json());

process.env.NODE_ENV !== "production" && app.use(morgan("dev"));

app.use(routes);

module.exports = app;
