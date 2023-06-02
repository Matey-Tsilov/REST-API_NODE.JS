const mongoose = require("mongoose")

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This property is required!'],
    minLength: [5, "The name should be more than 5 symbols"]
  },
  pages: {
    type: Number,
    min: [100, 'Book pages must be between 100 and 999 pages'],
    max: [999, 'Book pages must be between 100 and 999 pages']
  }
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
