const express = require('express')
const { PORT } = require('./constants')
const headersMiddleware = require('./middlewares/headersMiddleware')

const server = express()
server.use(headersMiddleware)
server.use(express.json())
//dataBase init
const { dbinit } = require('./config/dbinit')
dbinit()

server.listen(PORT, () => console.log(`App is listening on port ${PORT}`))