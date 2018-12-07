require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes");
// const keys = require("./keys");
// const axios = require("axios");
// const db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, (err)=> {
    if (err) throw err;
    mongoose.connect('mongodb://localhost/movieScrapper', { useNewUrlParser: true }, (err)=> {
        if (err) throw err;
        console.log("mongoose connection successful");
    });
    console.log(`app listening on port ${PORT}!`);
})