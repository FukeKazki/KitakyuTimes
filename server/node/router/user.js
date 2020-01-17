import express from 'express'
import mariadb from '../class/mariadb'
const router = express.Router()

const db = new mariadb

router.use((req, res, next) => {
    console.log((new Date()).toUTCString())
    next()
})

router.post('/signup', async (req, res) => {
    /* ======= テストデータ =======
    const data = {
        user_handle: 'test_user_name',
        user_mail_address: 'test@gmail.com',
        user_password: 'password',
        user_content: {},
    }
    */
    console.log('req.body' + req.body)
    const is_signup = await db.signUp(req.body)
    if (is_signup) return res.send('success')
    else return res.send('faile')

    // return res.send('success')
})

router.post('/login', (req, res) => {
    console.log(req.body)
    res.send('hello login')
})

router.get('/info/:user_handle', async (req, res) => {
    const {
        user_handle
    } = req.params
    const user_content = await db.getUserContent(user_handle)
    console.log(user_handle)
    res.send(user_content)
})

module.exports = router