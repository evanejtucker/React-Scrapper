const db = require("../models");

module.exports = {
    findAll: (req, res)=> {
        db.Movie.find(function(err, response) {
            res.send(response);
        })
    }
}