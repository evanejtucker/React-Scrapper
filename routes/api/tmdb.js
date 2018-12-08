const router = require("express").Router();
const tmdbController = require("../../controllers/tmdbController");

// Matches with "/api/tmdb/search/upcoming"
router
  .route("/search/upcoming")
  .get(tmdbController.findUpcoming);

// router
//   .route("/search/:searchType/:title")
//   .get(tmdbController.searchTitle)

router
  .route("/search/movieDetails/:movieID")
  .get(tmdbController.movieDetails)

module.exports = router;