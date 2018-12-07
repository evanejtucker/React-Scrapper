const db = require("../models");

module.exports = {
    findAll: (req, res)=> {
        db.Movie.find(function(err, response) {
            if(err) throw err;
            res.send(response);
        })
    }
}