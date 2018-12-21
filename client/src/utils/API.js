import axios from "axios";

export default {
  // Gets movies from the db
  getMovies: function() {
    return axios.get("/api/tmdb/search/upcoming");
  }

};
