import express from 'express'
const router = express.Router()

router.use((req, res, next) => {
    console.log((new Date()).toUTCString())
    next()
})

router.get('/', (req, res) => {
    res.send('hello post')
})

router.post('/contribute', (req, res) => {
    res.send('hello contribute')
})

router.post('/location', (req, res) => {
    res.send('hello location')
})
module.exports = router