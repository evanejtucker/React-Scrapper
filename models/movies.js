const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: { type: String, required: true },
  rating: { type: Number },
  poster: {type: String},
  overview: {type: String},
  release_date: {type: Date}
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;