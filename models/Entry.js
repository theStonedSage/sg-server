const mongoose = require("mongoose");

const entrySchema = mongoose.Schema({
  title: String,
  description: String,
  programType: String,
  images: {
    Poster_Art: {
      url: String,
      width: Number,
      height: Number,
    },
  },
  releaseYear: Number,
});

module.exports = mongoose.model("Entry", entrySchema);
