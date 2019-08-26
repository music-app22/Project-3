const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  track: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
