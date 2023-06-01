const router = require('express').Router()
const collectionService = require('../services/collectionService')

router.get('/catalog', async (req, res) => {
    const items = await collectionService.getAll()
    res.json(items)
})
router.post('/catalog', (req, res) => {
    const body = req.body
    //create new record in DB
    res.json({})
})
router.get('/catalog/:id', (req, res) => {
    const id = req.params.id
    //Find the record and return it
    res.json({})
})

module.exports = router