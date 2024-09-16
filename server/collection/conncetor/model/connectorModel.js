const mongoose = require("mongoose");

const connectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  connectorType: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Connectors_Type",
    required: true,
  },

  status: {
    type: Boolean,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  config: {
    url: {
      type: String,
      required: true,
    },
  },

  credentials: {
    token: {
      type: String,
    },
  },
});

const Connector = mongoose.model("Connectors", connectorSchema);

module.exports = {
  Connector,
};
