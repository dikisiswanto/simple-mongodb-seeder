const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  playCount: {
    required: true,
    type: Number,
    default: 0,
  },
  period: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("PopularSong", schema);
