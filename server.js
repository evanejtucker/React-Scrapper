const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, (err)=> {
    if (err) throw err;
    console.log(`app listening on port ${PORT}!`);
})