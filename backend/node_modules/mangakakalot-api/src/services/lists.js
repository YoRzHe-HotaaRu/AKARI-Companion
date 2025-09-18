// Service: list endpoints (popular/latest/newest/completed)
const {
  scrapePopularMangas,
  scrapeLatestMangas,
  scrapeNewestMangas,
  scrapeCompletedMangas,
} = require('../../scrappers/mangakakalot');

const getPopular = (page = 1) => scrapePopularMangas(page);
const getLatest = (page = 1) => scrapeLatestMangas(page);
const getNewest = (page = 1) => scrapeNewestMangas(page);
const getCompleted = (page = 1) => scrapeCompletedMangas(page);

module.exports = { getPopular, getLatest, getNewest, getCompleted };
