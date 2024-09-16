const joi = require("joi");
const urlRegex =
  /https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/a-zA-Z0-9#]+\/?)*(\?[a-zA-Z0-9=&]*)?/;

const typeSkeleton = {
  name: joi.string().min(3).max(12).required(),
  image: joi.string().pattern(urlRegex).required(),
  category: joi
    .string()
    .valid("Cloud provider", "Data lake", "Edr", "Saas", "Vpn")
    .required(),
  credentials: {
    token: joi.boolean(),
  },
};

const createSchema = joi.object(typeSkeleton);

module.exports = {
  createSchema,
};
