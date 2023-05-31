const router = require('express').Router()
const userController = require('./controllers/userController')
const collectionController = require('./controllers/collectionController')

router.use('/', userController)
router.use('/catalog', collectionController)

module.exports = router