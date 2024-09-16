const TypeFunction = require("../model/functions/typeFunctions");

const findAll = async (req, res) => {
  try {
    const findAllType = await TypeFunction.findAllType();

    res.json({
      status: 200,
      response: findAllType,
    });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};
module.exports = {
  findAll,
};
