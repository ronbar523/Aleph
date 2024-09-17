const joi = require("joi");
const urlRegex =
  /https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/a-zA-Z0-9#]+\/?)*(\?[a-zA-Z0-9=&]*)?/;

const tokenRegex1 = "/^[0-9]{6,12}$/";
const tokenRegex2 = "/^[a-zA-Z0-9]{6,12}$/";
const tokenRegex3 = '/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{6,12}$/';
const tokenRegex4 = "";

const typeSkeleton = {
  name: joi.string().min(3).max(12).required(),
  image: joi.string().pattern(urlRegex).required(),
  category: joi
    .string()
    .valid("Cloud provider", "Data lake", "Edr", "Saas", "Vpn")
    .required(),
  fields: {
    name: joi.string().min(3).max(12).required(),
    type: joi.string().valid("string", "boolean", "select").required(),
    validationRegex: joi
      .string()
      .valid(tokenRegex1, tokenRegex2, tokenRegex3, tokenRegex4)
      .required(),
    isCredentials: joi.boolean().required(),
  },
};

const createSchema = joi.object(typeSkeleton);

module.exports = {
  createSchema,
};
