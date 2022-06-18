const { Pool } = require('pg')

const config = {
    host: "localhost",
    port: 5432,
    database: "banco_lunar",
    user: "postgres",
    password: "123456"
}

const pool = new Pool(config)
module.exports = pool