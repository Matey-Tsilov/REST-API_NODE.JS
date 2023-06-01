const mongoose = require("mongoose")

const collectionSchema = new mongoose.Schema({
  example: {
    type: String,
    required: true,
  },
  example1: {
    type: Number
  }
    //add custom msgs: [true, 'Username field is mandatory!']
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
