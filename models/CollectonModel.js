const mongoose = require("mongoose")

const collectionSchema = new mongoose.Schema({
  example: {
    type: String,
    required: true,
  },
  example1: {
    type: Number
  }
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
