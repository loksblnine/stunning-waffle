const DataTypes = require("sequelize").DataTypes;
const _posts = require("./Posts");
const _categories = require("./Categories");
const _categories_to_post = require("./categories_to_post");

function models(sequelize) {
  const posts = _posts(sequelize, DataTypes);
  const categories = _categories(sequelize, DataTypes);
  const categories_to_post = _categories_to_post(sequelize, DataTypes);

  categories_to_post.removeAttribute('id');
  categories.hasMany(categories_to_post, {as: "categories_to_post", foreignKey: "category_id"});
  posts.hasMany(categories_to_post, {as: "categories_to_post", foreignKey: "post_id"});
  categories_to_post.belongsTo(categories, {as: "categories", foreignKey: "id"});
  categories_to_post.belongsTo(posts, {as: "posts", foreignKey: "id"});

  return {
    categories_to_post,
    posts,
    categories
  };
}

module.exports = models;
module.exports.initModels = models;
module.exports.default = models;
