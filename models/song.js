const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  artists: {
    required: true,
    type: Array,
  },
  album: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Song", schema);
