import React, { Component } from "react";
import API from "../utils/API"

class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    API.getMovies().then(response => {
      console.log(response)
      this.setState({
        movies: response.data
      });
    }).catch(error=> {
      console.log(error);
      this.setState({
        movies: []
      });
    })
  }

  render() {
    return (
        <div>
          {/* <h1>Hello World</h1> */}
          {this.state.movies.map(movie => (
            <div>
              <p>{movie.title}</p>
              <hr/>
            </div>
          ))}
        </div>
    );
  }
}

export default Home;