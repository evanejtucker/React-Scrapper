require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, (err)=> {
    if (err) throw err;
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/movieScrapper', { useNewUrlParser: true }, (err)=> {
        if (err) throw err;
        console.log("mongoose connection successful");
    });
    console.log(`app listening on port ${PORT}!`);
});