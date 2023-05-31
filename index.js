const express = require('express')
const { PORT } = require('./constants')

const server = express()
server.use(express.json())


server.listen(PORT, () => console.log(`App is listening on port ${PORT}`))