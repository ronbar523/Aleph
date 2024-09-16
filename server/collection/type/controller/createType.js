const TypeValidation = require("../validation/typeValidation");
const TypeFunction = require("../model/functions/typeFunctions");

const create = async (req, res) => {
  try {
    const requestBody = await TypeValidation.createSchema.validateAsync(
      req.body,
      { abortEarly: false }
    );

    const existName = await TypeFunction.findTypeByName(requestBody.name);

    if (existName.length === 0) {
      const connectorType = await TypeFunction.createType(
        requestBody.name,
        requestBody.image,
        requestBody.category,
        requestBody.credentials.token
      );

      res.json({
        status: 201,
        msg: "You've successfully created type connector",
        response: connectorType,
      });
    } else {
      res.json({ msg: "Connector's type name already exist" });
    }
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};

module.exports = {
  create,
};
