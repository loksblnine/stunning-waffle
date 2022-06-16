const models = require("../database/models");
const sequelize = require("../database/config");

const createCategory = (categoryName, t) => {
  try {
    return models.initModels(sequelize).categories.findOrCreate({
        where: {
          name: categoryName
        },
        defaults: {
          name: categoryName
        },
      raw: true,
        transaction: t
      }
    );
  } catch (e) {
    console.log("[worker1]: [CategoriesController]: createCategory", e.toString());
  }
};


module.exports = {
  createCategory,
};