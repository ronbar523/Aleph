const ConnectorFunction = require("../model/function/connectorFunction");

const findAll = async (req, res) => {
  try {

    const connectorArr = await ConnectorFunction.findAllConnector();

    res.json({ response: connectorArr });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};

module.exports = {
    findAll,
};
