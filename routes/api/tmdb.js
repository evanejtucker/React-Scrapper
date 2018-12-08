const router = require("express").Router();
const tmdbController = require("../../controllers/tmdbController");

// Matches with "/api/tmdb/upcoming"
router
  .route("/search/upcoming")
  .get(tmdbController.findUpcoming);

router
  .route("/search/movie/:movie")
  .get(tmdbController.searchMovie)

module.exports = router;