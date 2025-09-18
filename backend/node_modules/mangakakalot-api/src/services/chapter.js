// Service: chapter images
const { scrapeChapterImages } = require('../../scrappers/mangakakalot');

/**
 * Get all pages(images) in a chapter.
 * @param {string} mangaId
 * @param {string} chapterId
 */
async function getChapterImages(mangaId, chapterId) {
  return scrapeChapterImages(mangaId, chapterId);
}

module.exports = { getChapterImages };
