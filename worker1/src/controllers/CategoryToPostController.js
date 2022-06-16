const models = require("../database/models");
const sequelize = require("../database/config");

const createCategoryToPost = (post_id, category_id, t) => {
  try {
    return models.initModels(sequelize).categories_to_post.findOrCreate({
        where: {
          post_id,
          category_id
        },
        raw: true,
        transaction: t
      }
    );
  } catch (e) {
    console.log("[worker1]: [CategoryToPostController]: createCategoryToPost", e.toString());
  }
};

module.exports = {
  createCategoryToPost,
};