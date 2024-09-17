const express = require("express");
const Router = express.Router();
const ControllerCreate = require("../controller/createConnector");
const ControllerFindAll = require("../controller/findAllConnectors");


Router.post("/create/:connectorType", ControllerCreate.create);

Router.get("/find_all", ControllerFindAll.findAll);


module.exports = Router;
