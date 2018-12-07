import axios from "axios";

export default {
  // Gets movies from the db
  getBooks: function() {
    return axios.get("/api/movies/findall");
  }

};
