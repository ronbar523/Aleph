const express = require("express");
const Router = express.Router();
const ControllerCreate = require("../controller/createType");
const ControllerGetAll = require("../controller/getAllType");

Router.post("/create", ControllerCreate.create);

Router.get("/find_all", ControllerGetAll.findAll);

module.exports = Router;
