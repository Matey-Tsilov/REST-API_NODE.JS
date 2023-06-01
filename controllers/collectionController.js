const router = require('express').Router()
const collectionService = require('../services/collectionService')
//сложи всичко в try catchs!!!
router.get('/catalog', async (req, res) => {
    const items = await collectionService.getAll()
    res.json(items)
})
router.post('/catalog', async (req, res) => {
    const body = req.body
    const createdItem = await collectionService.create(body)
    res.status(201).json(createdItem)
})
router.get('/catalog/:id', async (req, res) => {
    const id = req.params.id
    const item = await collectionService.getById(id)
    res.json(item)
})

module.exports = router