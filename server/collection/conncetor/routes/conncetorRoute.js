const express = require("express");
const Router = express.Router();
const ControllerCreate = require("../controller/createConnector");

Router.post("/create/:connectorType", ControllerCreate.create);

module.exports = Router;
