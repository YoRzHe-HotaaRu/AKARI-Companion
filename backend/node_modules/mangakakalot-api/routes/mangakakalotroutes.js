const express = require("express");
const {
  getMangaChapterImages,
  getMangaDetails,
  getMangaSearch,
  getLatestMangas,
  getPopularMangas,
  getNewestMangas,
  getCompletedMangas,
  getPopularNowMangas,
  getHomePage,
} = require("../controllers/mangaKakalotController");

const router = express.Router();

router.get("/read/:mangaId?/:chapterId?", getMangaChapterImages);
router.get("/details/:id", getMangaDetails);
router.get("/search/:query?/:page?", getMangaSearch);
router.get("/latest/:page?", getLatestMangas);
router.get("/popular/:page?", getPopularMangas);
router.get("/newest/:page?", getNewestMangas);
router.get("/completed/:page?", getCompletedMangas);
router.get("/popular-now", getPopularNowMangas);
router.get("/home", getHomePage);

module.exports = router;