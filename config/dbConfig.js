const mongoose = require('mongoose')
const {CONNECTION_STRING} = require('../constants')

exports.dbinit = () => {
    mongoose.connection.on('open', () => {
        console.log('DB is connected!');
        
    })
    return mongoose.connect(CONNECTION_STRING)
} 