import express from 'express'
import user from './router/user'
import post from './router/post'
const app = express()
const PORT = 3000

/* ========================= */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

/* ========================= */
// テスト
app.get('/', (req, res) => {
    res.status(200)
    res.send('Hello Express')
})

/* ========================= */
// ルーティング

app.use('/api/v1/user', user)
app.use('/api/v1/post', post)

/* ========================= */
// サーバ起動
app.listen(PORT, () => {
    console.log('listen to:' + PORT)
})