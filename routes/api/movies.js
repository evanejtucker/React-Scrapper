const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/movies/findall"
router
  .route("/findall")
  .get(movieController.findAll);

module.exports = router;