const router = require('express').Router()

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
    req.json({})
})

module.exports = router