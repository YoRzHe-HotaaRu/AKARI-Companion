const { scrapeHomePage } = require('../../scrappers/mangakakalot');

const getHomePage = () => scrapeHomePage();
module.exports = { getHomePage };
