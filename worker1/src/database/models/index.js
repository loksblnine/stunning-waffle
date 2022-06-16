const DataTypes = require("sequelize").DataTypes;
const _posts = require("./Posts");
const _categories = require("./Categories");

function models(sequelize) {
  const posts = _posts(sequelize, DataTypes);
  const categories = _categories(sequelize, DataTypes)
  return {
    posts,
    categories
  };
}

module.exports = models;
module.exports.initModels = models;
module.exports.default = models;
