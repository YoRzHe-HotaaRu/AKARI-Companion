// Service: details
const { scrapeMangaDetails } = require('../../scrappers/mangakakalot');

/**
 * Get manga details including chapters list
 * @param {string} mangaId
 */
async function getDetails(mangaId) {
  return scrapeMangaDetails(mangaId);
}

module.exports = { getDetails };
