const mongoose = require("mongoose");

const ConnectorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  connectorType: { type: mongoose.SchemaTypes.Mixed, required: true },
  status: { type: Boolean, default: true },
  description: { type: String, required: true },
  config: {
    url: { type: String, required: true },
  },

  credentials: {
    typeId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Connectors_Type",
      required: true,
    },

    token: { type: String, required: false },
  },
});

const Connector = mongoose.model("Connectors", ConnectorSchema);

module.exports = {
  Connector,
};
