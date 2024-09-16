const mongoose = require("mongoose");

const connectorTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    enum: ["Cloud provider", "Data lake", "Edr", "Saas", "Vpn"],
    required: true,
  },

  credentials: {
    token: {
      type: Boolean,
      default: true,
    },
  },
});

const ConnectorType = mongoose.model("Connectors_Type", connectorTypeSchema);

module.exports = {
  ConnectorType,
};
