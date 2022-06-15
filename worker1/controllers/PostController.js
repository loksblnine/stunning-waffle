const models = require("../database/models");
const sequelize = require("../database/config/index");

const createPost = (postData) => {
  try {
    return models.initModels(sequelize).city.create(
      postData
    );
  } catch (e) {
    console.log("---worker--- [PostController]: createPost", e.toString());
  }
};

const checkIfExists = async (postData) => {
  try {


  } catch (e) {
    console.log("---worker--- [PostController]: checkIfExists ", e.toString());
  }
};