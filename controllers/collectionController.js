const router = require('express').Router()
const collectionService = require('../services/collectionService')

router.get('/catalog', async (req, res) => {
    try {
        const items = await collectionService.getAll()
        res.json(items)
    } catch (error) {
        res.status(404).json({message: 'Failed to load ressources'})
    }
})
router.post('/catalog', async (req, res) => {
    const body = req.body
    try {
        const createdItem = await collectionService.create(body)
        res.status(201).json(createdItem)
    } catch (error) {
        res.status(404).json({message: 'Failed to load ressources'})
    }
})
router.get('/catalog/:id', async (req, res) => {
    const id = req.params.id
    try {
        const item = await collectionService.getById(id)
        res.json(item)
    } catch (error) {
        res.status(404).json({message: 'Failed to load ressources'})
    }
    
})

module.exports = router