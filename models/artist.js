const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  dateOfBirth: {
    required: true,
    type: Date,
  },
  genres: {
    required: true,
    type: Array,
  },
});

module.exports = mongoose.model("Artist", schema);
