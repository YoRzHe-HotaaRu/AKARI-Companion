// Service: search
// Exposes search(query,page?) which proxies to the core scraper implementation

const { scrapeMangaSearch } = require('../../scrappers/mangakakalot');

/**
 * Search mangas by title keyword.
 * @param {string} query
 * @param {number} [page=1]
 */
async function search(query, page = 1) {
  return scrapeMangaSearch(query, page);
}

module.exports = { search };
