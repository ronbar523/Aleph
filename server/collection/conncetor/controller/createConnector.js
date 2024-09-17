const ConnecotrValidation = require("../validation/connectorValidation");
const ConnectorFunction = require("../model/function/connectorFunction");

const create = async (req, res) => {
  try {

    const requestBody = await ConnecotrValidation.createSchema.validateAsync(
      req.body,
      { abortEarly: false }
    );

    const { connectorType } = req.params;

    const connector = await ConnectorFunction.createConnector(
      requestBody.name,
      requestBody.connectorType,
      requestBody.status,
      requestBody.description,
      requestBody.config.url,
      connectorType,
      requestBody.credentials.token,
    );

    res.json({
      status: 201,
      msg: "You've successfully created connector",
      response: connector,
    });
    
  } catch (err) {
console.log(err)
    res.status(400).json({ status: 400, err: err });
  }
};

module.exports = {
  create,
};
