const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  url: { type: Object},
  image: { type: String},
  likes: { type: Number},
  order: { type: Number},
  songID: { type: String}
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;