const router = require('express').Router()

router.get('/catalog', (req, res) => {
    //display all records in a collection
    res.json({})
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