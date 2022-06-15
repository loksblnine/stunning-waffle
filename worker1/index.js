const Parser = require("rss-parser");
const cron = require('node-cron');
require('dotenv').config();

const PostController = require("./controllers/PostController");
const CategoriesController = require("./controllers/CategoriesController");

(function main() {
  const parser = new Parser();
  cron.schedule('0 * * * *', async () => {
    const {items} = await parser.parseURL(process.env.RSS_FEED_URL);
    console.log(`[worker1]: main() cron-job at ${new Date()}`, items);
    let categories = [];
    let promises = [];

    items.forEach((item) => {
      promises.push(PostController.createPost(item))
      categories.push(...item.categories)
    });

    [...new Set(categories)].forEach((item) => {
      promises.push(CategoriesController.createCategory(item))
    })
    console.log(promises.length);
    Promise.all(promises)
      .then(values => {
        console.log(`[worker1]: at ${new Date()} executed ${values.length} promises`);
      })
  });

})();

