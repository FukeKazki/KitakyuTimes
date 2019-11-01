import express from 'express'

const PORT = 3000

const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/', async (req, res) => {
    res.status(200).send('Hello World').end()
})

app.listen(PORT)
console.log(`Server running at ${PORT}`)