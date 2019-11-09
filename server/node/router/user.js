import express from 'express'
const router = express.Router()

router.use((req, res, next) => {
    console.log((new Date()).toUTCString())
    next()
})

router.get('/', (req, res) => {
    res.send('hello user')
})

router.post('/signup', (req, res) => {
    res.send('hello signup')
})

router.post('/login', (req, res) => {
    res.send('hello login')
})

router.post('/info:user_handle', (req, res) => {
    res.send('hello info')
})

module.exports = router