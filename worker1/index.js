const Parser = require("rss-parser");
require('dotenv').config();

(async function main() {
  const parser = new Parser();
  const feed = await parser.parseURL(process.env.RSS_FEED_URL);

  let items = [];


})();

function isEquivalent(a, b) {
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);

  if (aProps.length != bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // if we made it this far, objects are considered equivalent
  return true;
}