const router = require('express').Router()
const collectionService = require('../services/collectionService')
const mongooseErrorMapper = require('../utils/mongooseErrorMapper')

router.get('/', async (req, res) => {
    try {
        const items = await collectionService.getAll()
        res.json(items)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const item = await collectionService.getById(id)
        res.json(item)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})
router.post('/', async (req, res) => {
    const body = req.body
    try {
        const createdItem = await collectionService.create(body)
        res.status(201).json(createdItem)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const updatedItem = req.body
    try {
        const result = await collectionService.updateById(id, updatedItem)
        res.json(result)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await collectionService.deleteById(id)
        res.json(result)
    } catch (error) {
        const errorMsg = mongooseErrorMapper(error)
        res.status(404).json({message: errorMsg})
    }
})

module.exports = router