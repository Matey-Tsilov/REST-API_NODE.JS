const mongoose = require('mongoose').Schema

const collectionSchema = new mongoose.Schema({
//key and values
})

const Collection = mongoose.model('Collection', collectionSchema)

module.exports = Collection