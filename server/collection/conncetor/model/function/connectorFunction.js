const { Connector } = require("../connectorModel");

const createConnector = async (
  name,
  connectorType,
  status,
  description,
  url,
  token,
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
      token: token,
    },
  });
  return newConnector.save();
};


module.exports = {
  createConnector,
};
