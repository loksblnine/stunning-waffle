const Parser = require('rss-parser');
const cron = require('node-cron');
require('dotenv').config();

const sequelize = require("./database/config/index");

const PostController = require("./controllers/PostController");
const CategoriesController = require("./controllers/CategoriesController");
const CategoryToPostController = require("./controllers/CategoryToPostController");

(function main() {
  const parser = new Parser();

  cron.schedule('* * * * *', async () => {
    const {items} = await parser.parseURL(process.env.RSS_FEED_URL);
    console.log(`[worker1]: main() cron-job at ${new Date()}`, items);
    let promises = [];

    items.forEach((item) => {
      promises.push(sequelize.transaction(async (t) => {
        try {
          const post = await PostController.createPost(item, t);
          return Promise.all(item.categories.map(async (categoryName) => {
            const category = await CategoriesController.createCategory(categoryName, t);
            await CategoryToPostController.createCategoryToPost(post[0].id, category[0].id, t);
          }))
        } catch (e) {
          console.log(e.toString())
        }
      }));
    });
    Promise.all(promises)
      .then(values => {
        console.log(`[worker1]: at ${new Date()} executed ${values.length} promises`);
      });
  });

})();

