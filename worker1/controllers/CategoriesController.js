const models = require("../database/models");
const sequelize = require("../database/config/index");

const createCategory = (categoryName) => {
  try {
    return models.initModels(sequelize).categories.findOrCreate({
        where: {
          name: categoryName
        },
        defaults: {
          name: categoryName
        }
      }
    );
  } catch (e) {
    console.log("---worker--- [CategoriesController]: createCategory", e.toString());
  }
};


module.exports = {
  createCategory,
};