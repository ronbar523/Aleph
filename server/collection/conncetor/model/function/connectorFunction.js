const { Connector } = require("../connectorModel");

const createConnector = async (
  name,
  connectorType,
  status,
  description,
  url,
  typeId,
  token
) => {
  const newConnector = new Connector({
    name,
    connectorType,
    status,
    description,
    config: {
      url: url,
    },
    credentials: {
      typeId: typeId,
      token: token,
    },
  });
  return newConnector.save();
};

const findAllConnector = () => {
  return Connector.find();
};

module.exports = {
  createConnector,
  findAllConnector,
};
