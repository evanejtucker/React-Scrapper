const router = require("express").Router();
const tmdbController = require("../../controllers/tmdbController");

// Matches with "/api/tmdb/upcoming"
router
  .route("/upcoming")
  .get(tmdbController.findUpcoming);

module.exports = router;