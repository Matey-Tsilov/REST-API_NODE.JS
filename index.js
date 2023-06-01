const express = require('express')
const mongoose = require('mongoose')
const CORSMiddleware = require('./middlewares/headersMiddleware')
const { PORT, CONNECTION_STRING } = require('./constants')


async function start() {
    try {
        const db = await mongoose.connect(CONNECTION_STRING)
        console.log("DB is ready");
    } catch (error) {
        console.log('Error connecting to DB');
        return process.exit(1)
    }

    const server = express()

    server.use(CORSMiddleware)
    server.use(express.json())

    server.listen(PORT, () => console.log(`App is listening on port ${PORT}`))
}

start()
