import mysql from 'mysql2/promise'
import { con } from './repository/connection.js'

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    passeword: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB
})



export { con } 