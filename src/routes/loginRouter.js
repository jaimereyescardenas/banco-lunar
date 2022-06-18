const express = require('express')
const { getUserByEmail } = require('../models/user')

const router = express.Router()

router.post('/', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await getUserByEmail(email)
        if (user) {
            if (user.password === password) {
                res.render('home')
            } else {
                res.render('unauthorized')
            }
        } else {
            res.render('message', {
                message: `El usuario con email ${email} no fue encontrado`
            })
        }
    } catch (error) {
        const message = `Error al obtener usuario: ${error}`
        console.log(message)

        res.render('message', {
            message: message
        })
    }
})

module.exports = router