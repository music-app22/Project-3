const mongoose = require("mongoose");
const db = require("../models");

// This file empties the songs collection and inserts the songs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const songSeed = [];

db.Song
  .remove({})
  .then(() => db.Song.collection.insertMany(songSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
