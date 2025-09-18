// Thin axios wrapper used by service modules
// You can replace this with your own implementation if you need extra headers / caching.

const axios = require('axios');

const BASE_URL = 'https://www.mangakakalot.gg';

/**
 * Perform a GET request to mangakakalot.gg and return raw HTML.
 * The User-Agent header is set to mimic a real browser so the
 * site doesn’t block or throttle the request.
 * @param {string} path Path that will be appended to the base URL
 * @returns {Promise<string>} Raw HTML
 */
async function getHtml(path) {
  const { data } = await axios.get(`${BASE_URL}${path}`, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0 Safari/537.36',
      Referer: BASE_URL,
    },
    timeout: 15000,
  });
  return data;
}

module.exports = { getHtml, BASE_URL };
