const pool = require('../connection')

const getUserById = async (id) => {
    try {
        const query = {
            text: `SELECT * FROM users WHERE id = $1`,
            values: [id]
        }
        const result = await pool.query(query)
        const user = result.rows[0]
        return user
    } catch (error) {
        const message = `Error al ejecutar sentencia: ${error}`
        console.log(message)
        throw new Error(message)
    }
}

const addUser = async (name, email, password) => {
    try {
        const query = {
            text: `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
            values: [name, email, password]
        }
        const result = await pool.query(query)
        const newUser = result.rows[0]
        return newUser
    } catch (error) {
        const message = `Error al ejecutar sentencia: ${error}`
        console.log(message)
        throw new Error(message)
    }
}

module.exports = {
    getUserById,
    addUser
}