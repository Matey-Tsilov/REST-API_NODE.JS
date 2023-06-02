const router = require('express').Router()
const collectionService = require('../services/collectionService')

router.get('/', async (req, res) => {
    try {
        const items = await collectionService.getAll()
        res.json(items)
    } catch (error) {
        res.status(404).json({message: 'Failed to load ressources'})
    }
})
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const item = await collectionService.getById(id)
        res.json(item)
    } catch (error) {
        res.status(404).json({message: 'Failed to load ressources'})
    }
})
router.post('/', async (req, res) => {
    const body = req.body
    console.log(body);
    
    try {
        const createdItem = await collectionService.create(body)
        res.status(201).json(createdItem)
    } catch (error) {
        console.log(error);
        res.status(404).json({message: 'Failed to create ressource'})
    }
})
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const updatedItem = req.body
    try {
        const result = await collectionService.updateById(id, updatedItem)
        res.json(result)
    } catch (error) {
        res.status(404).json({message: 'Failed to update ressource'})
    }
})
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await collectionService.deleteById(id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message: 'Failed to delete ressource'})
    }
})

module.exports = router