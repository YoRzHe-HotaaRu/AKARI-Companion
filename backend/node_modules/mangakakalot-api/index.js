
const {
  scrapeChapterImages,
  scrapeMangaDetails,
  scrapeMangaSearch,
  scrapePopularMangas,
  scrapeLatestMangas,
  scrapeNewestMangas,
  scrapeCompletedMangas,
  scrapePopularNowMangas,
  scrapeHomePage,
} = require('./scrappers/mangakakalot');

const core = require('./scrappers/mangakakalot');
const svc  = require('./src');

module.exports = {
  ...svc,

  ...core,

  search: svc.search.search,
  getDetails: svc.details.getDetails,
  getChapterImages: svc.chapter.getChapterImages,
  getPopular: svc.lists.getPopular,
  getLatest: svc.lists.getLatest,
  getNewest: svc.lists.getNewest,
  getCompleted: svc.lists.getCompleted,
  getPopularNow: svc.popularNow.getPopularNow,
  getHomePage: svc.home.getHomePage,

  version: require('./package.json').version,
};