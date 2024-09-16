const { ConnectorType } = require("../typeModel");

const createType = async (name, image, category, token) => {
  const newType = new ConnectorType({
    name,
    image,
    category,
    credentials: {
      token,
    },
  });
  return newType.save();
};

const findTypeByName = (name) => {
  return ConnectorType.find({
    name: { $regex: "^" + name.toString(), $options: "i" },
  });
};

const findAllType = () => {
  return ConnectorType.aggregate([
    {
      $addFields: {
        lowerName: { $toLower: "$name" },
      },
    },
    {
      $sort: {
        category: 1,
        lowerName: 1,
      },
    },
  ]);
};

module.exports = {
  createType,
  findAllType,
  findTypeByName,
};
