const models = require("../database/models");
const sequelize = require("../database/config");

const createPost = (postData, t) => {
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
        },
        raw: true,
        transaction: t
      }
    );
  } catch (e) {
    console.log("---worker--- [PostController]: createPost", e.toString());
  }
};

module.exports = {
  createPost,
};