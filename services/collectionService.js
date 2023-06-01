const Collection = require('../models/CollectonModel')

exports.getAll = () => Collection.find({})
exports.getById = (id) => Collection.findById(id)
exports.create = (recordData) => Collection.create(recordData)
exports.updateById = (id) => Collection.findByIdAndUpdate(id) 
exports.deleteById = (id) => Collection.findByIdAndDelete(id) 

