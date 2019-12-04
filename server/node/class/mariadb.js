import mysql from 'mysql'
import util from 'util'
import crypto from 'crypto'

module.exports = class DB {
    constructor() {
        this.pool = mysql.createPool({
            host: 'mariadb',
            user: 'challecare',
            password: 'challecare',
            database: 'kt',
        })
        this.pool.query = util.promisify(this.pool.query)
    }
    async query(param) {
        try {
            const results = await this.pool.query(param)
            this.pool.end()
            return results
        } catch (err) {
            console.log(err)
        }
    }

    async getUserContent(user_handle) {
        try {
            const SQL = 'SELECT user_content FROM user WHERE user_handle = ?'
            const query = await this.pool.query(SQL, [user_handle])
            return Promise.resolve(query)
        } catch (err) {
            console.log(err)
            return {}
        }
    }

    async signUp(data) {
        // パスワードのハッシュ化
        data.user_password = crypto.createHash('SHA256').update(data.user_password, 'utf8').digest('hex')
        // データベースへの挿入
        try {
            const SQL = 'INSERT INTO user SET ?'
            const query = await this.pool.query(SQL, [data])
            console.log(query)
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }
    async insert_location(data, lat, lang) {
        try {
            const sql = 'INSERT INTO location SET ?, location_geo = POINT(?,?)'
            // ====== test datas ======
            // const data = {
            //     location_user_id: 1,
            //     location_date: '2019-11-09 14:30:00.500'
            // }
            // const lat = 33.8845774
            // const lang = 130.8794502
            const query = await this.pool.query(sql, [data, lat, lang])
            console.log(query)
        } catch (err) {
            console.log(err)
        }
    }
}