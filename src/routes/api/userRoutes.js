const express = require('express')
const { getUserById, addUser } = require('../../models/user')

const router = express.Router()

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    try {
        const user = await getUserById(userId)
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({
                message: `El usuario con id ${userId} no fue encontrado`
            })
        }
    } catch (error) {
        const message = `Error al obtener usuario: ${error}`
        console.log(message)
        res.status(500).json({
            message: message
        })
    }
})

router.post('/', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const newUser = await addUser(name, email, password)
        if (newUser) {
            res.status(201).json(newUser)
        } else {
            res.json({
                message: 'Algo salió mal D:'
            })
        }
    } catch (error) {
        const message = `Error al crear usuario: ${error}`
        console.log(message)
        res.status(500).json({
            message: message
        })
    }
})

module.exports = router