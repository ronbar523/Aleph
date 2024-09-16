const joi = require("joi");
const urlRegex =
  /https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/a-zA-Z0-9#]+\/?)*(\?[a-zA-Z0-9=&]*)?/;

const connectorSkeleton = {
  name: joi.string().min(3).max(15).trim().required(),
  status: joi.boolean().required(),
  description: joi.string().min(10).max(200).required(),
  config: joi
    .object({
      url: joi.string().pattern(urlRegex).required(),
    })
    .required(),
  credentials: {
    token: joi.string().min(6).max(12).required(),
  },
};

const createSchema = joi.object(connectorSkeleton);

module.exports = {
  createSchema,
};
