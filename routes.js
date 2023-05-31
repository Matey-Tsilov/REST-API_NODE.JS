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

router.post('/login', (req, res) => {
    const body = req.body
    //Find the record in DB if there, if not throw error
    res.json({})
})
router.post('/register', (req, res) => {
    const body = req.body
    //Create new record in DB
    res.json({})
})
router.get('/logout/:id', (req, res) => {
    //delete record from DB

})



module.exports = router