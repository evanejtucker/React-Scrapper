const db = require("../models");
const keys = require("../keys");
const axios = require("axios");
const API = process.env.TMDB_API || keys.moviesDB.API_Key;

module.exports = {
    findUpcoming: (req, res)=> {
        // let API = process.env.TMDB_API || keys.moviesDB.API_Key;
        let url = "https://api.themoviedb.org/3/discover/movie?";
        axios.get(url, {params: {
            api_key: API,
            language: "en-US",
            // sort_by: "release_date.desc",
            include_adult: false,
            include_video: false,
            page: 1
        }}).then((movies)=> {
            let movieArray = [];
            for (let i=0; i<movies.data.results.length; i++) {
                let movie = {
                    title: movies.data.results[i].title,
                    rating: movies.data.results[i].vote_average,
                    poster: movies.data.results[i].poster_path,
                    overview: movies.data.results[i].overview,
                    release_date: movies.data.results[i].release_date
                }
                movieArray.push(movie);  
            }
            // db.Movie.insertMany(movieArray, function (err, response) {
            //     if (err) return handleError(err);
            //     console.log("movies successfully added to the db");
            // });
            res.json(movieArray);
        }).catch((err)=> {
            res.send(err);
        });
    },

    searchMovie: (req, res)=> {
        // console.log(req.body.params)
        console.log('getting into route');
        url = "https://api.themoviedb.org/3/search/movie?"
        data = {
            api_key: API,
            language: "en-US",
            query: req.params.movie,
            page: 1,
            include_adult: false
        }
        axios.get(url, {
            params: data
        }).then((response)=> {
            console.log(response.data.results);
            res.json(response.data.results);
        }).catch((err)=> {
            res.json(err);
        });
    } 
}