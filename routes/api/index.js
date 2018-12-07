const path = require("path");
const router = require("express").Router();
const movieRoutes = require("./movies");
const tmdbRoutes = require("./tmdb");

// moive routes
router.use("/movies", movieRoutes);

// tmdb routes
router.use("/tmdb", tmdbRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;