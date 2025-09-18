const { scrapePopularNowMangas } = require('../../scrappers/mangakakalot');

const getPopularNow = () => scrapePopularNowMangas();
module.exports = { getPopularNow };
