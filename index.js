const express = require('express')
const { PORT } = require('./constants')

const server = express()
server.use(express.json())
//dataBase init
const { dbinit } = require('./config/dbinit')
dbinit()


server.listen(PORT, () => console.log(`App is listening on port ${PORT}`))