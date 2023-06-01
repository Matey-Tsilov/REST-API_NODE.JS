const express = require('express')
const CORSMiddleware = require('./middlewares/headersMiddleware')
const { PORT } = require('./constants')

const server = express()
server.use(CORSMiddleware)
server.use(express.json())
//dataBase init
const { dbinit } = require('./config/dbConfig')
dbinit()

server.listen(PORT, () => console.log(`App is listening on port ${PORT}`))