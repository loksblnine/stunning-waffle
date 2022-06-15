const models = require("../database/models");
const sequelize = require("../database/config/index");

const createPost = (postData) => {
  try {
    return models.initModels(sequelize).posts.findOrCreate({
        where: {
          content_snippet: postData.contentSnippet,
          title: postData.title
        },
        defaults: {
          creator: postData.creator,
          content: postData.content,
          content_snippet: postData.contentSnippet,
          title: postData.title,
          link: postData.link,
          isoDate: postData.pubDate
        }
      }
    );
  } catch (e) {
    console.log("---worker--- [PostController]: createPost", e.toString());
  }
};

module.exports = {
  createPost,
};