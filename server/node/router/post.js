import express from 'express'
import mariadb from '../class/mariadb'
const router = express.Router()

const db = new mariadb

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

router.get('/location_list', async (req, res) => {
    const result = await db.query('SELECT location_id, location_user_id, X(location_geo) as latitude, Y(location_geo) as longitude, location_content, location_date FROM location')
    console.log(result)
    res.send(result)
})

router.post('/location', async (req, res) => {
    const {
        data,
        lat,
        lang,
    } = req.body
    data['location_content'] = JSON.stringify(data.location_content)
    console.log(data, lat, lang)
    const result = await db.insert_location(data, lat, lang)
    if (result) res.send('success location')
    else res.send('failed location')
})

router.get('/post_list', async (req, res) => {
    const result = await db.query('SELECT post_id, post_user_id, X(post_geo) as latitude, Y(post_geo) as longitude, post_content, post_date FROM post')
    console.log(result)
    res.send(result)
})



module.exports = router