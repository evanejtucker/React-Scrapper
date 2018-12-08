const db = require("../models");
const keys = require("../keys");
const axios = require("axios");
const API = process.env.TMDB_API || keys.moviesDB.API_Key;

module.exports = {

    // find list of upcoming movies
    findUpcoming: (req, res)=> {
        // let API = process.env.TMDB_API || keys.moviesDB.API_Key;
        let url = "https://api.themoviedb.org/3/discover/movie?";
        axios.get(url, {params: {
            api_key: API,
            language: "en-US",
            sort_by: "release_date.desc",
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
            console.log("movies successfully loaded!");
            res.json(movieArray);
        }).catch((err)=> {
            console.log("something went wrong :(");
            res.send(err);
        });
    },

    // searches for a specific movie or TV show
    searchTitle: (req, res)=> {
        let url = `https://api.themoviedb.org/3/search/${req.params.searchType}?`
        let data = {
            api_key: API,
            language: "en-US",
            query: req.params.title,
            page: 1,
            include_adult: false
        }
        axios.get(url, {
            params: data
        }).then((response)=> {
            console.log("response successfully loaded!");
            res.json(response.data.results);
        }).catch((err)=> {
            console.log("Something went wrong :(");
            res.json(err);
        });
    }, 

    // searchTitleDetails: (req, res)=> {
    //     let url = `https://api.themoviedb.org/3/find/`
    //     let data = {
    //         api_key: API,
    //         language: "en-US",
    //         external_id: req.params.titleID,
    //         page: 1,
    //         include_adult: false
    //     }
    //     axios.get(url, {
    //         params: data
    //     }).then((response)=>{
    //         console.log(response.data.results);
    //         res.json(response.data.results);
    //     }).catch((err)=> {
    //         res.json(err);
    //     });
    // },

    movieDetails: (req, res)=> {
        console.log("function hit");
        let url = `https://api.themoviedb.org/3/movie/`
        let data = {
            external_id: req.params.movieID,
            api_key: API,
            language: "en-US",
            // page: 1,
            // include_adult: false
        }
        axios.get(url, {
            params: data
        }).then((response)=>{
            console.log(response.data.results);
            res.json(response.data.results);
        }).catch((err)=> {
            res.json(err);
        });

        // axios.get("https://api.themoviedb.org/3/movie/123025?api_key=80b6c8343cf908fcdc17ccb31170064b&language=en-US").then((response)=> {
        //     res.json(response);
        // }).catch((err)=> {
        //     res.json(err);
        // })
    }


}