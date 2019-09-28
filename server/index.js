'use strict'
import express from 'express'
const app = express()
const PORT = 3000
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.get('/', (req, res) => {
    res.status(200)
    res.send('Hello Express')
})
app.listen(PORT, () => {
    console.log('listen to: ' + PORT)
})