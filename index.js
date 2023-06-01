const express = require('express')
const mongoose = require('mongoose')
const CORSMiddleware = require('./middlewares/CORSmiddleware')
const { PORT, CONNECTION_STRING } = require('./constants')
const router = require('./routes')

async function start() {
    try {
        const db = await mongoose.connect(CONNECTION_STRING)
        console.log("DB is ready");
    } catch (error) {
        console.log('Error connecting to DB');
        return process.exit(1)
    }
    //creating the REST application
    const server = express()
    //middlewares
    server.use(express.json())
    server.use(CORSMiddleware())
    //router
    server.use(router)
    //initial message
    server.listen(PORT, () => console.log(`App is listening on port ${PORT}`))
}
start()
