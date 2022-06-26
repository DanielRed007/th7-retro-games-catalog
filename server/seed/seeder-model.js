const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  producedBy: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  version: {
    type: String,
  },
  system: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Game", GameSchema);
