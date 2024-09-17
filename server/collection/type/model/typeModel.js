const mongoose = require("mongoose");

const ConnectorTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  fields: [
    {
      name: { type: String, required: true },
      type: {
        type: String,
        enum: ["string", "boolean", "select"],
        required: true,
      },
      validationRegex: { type: String, default: "", required: true },
      isCredentials: { type: Boolean, required: true },
    },
  ],
});

const ConnectorType = mongoose.model("ConnectorType", ConnectorTypeSchema);


module.exports = {
  ConnectorType,
};
