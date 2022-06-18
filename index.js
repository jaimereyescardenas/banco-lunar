const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const handlebars = require('express-handlebars')

const userRouter = require('./src/routes/api/userRoutes')

const app = express()

// Constantes
const PORT = 3000

// Config
app.engine('handlebars', handlebars.engine())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname,'views'))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

// Rutas
app.get('/', (req, res) => {
    res.render('login')
})

app.use('/api/v1/users', userRouter)  // Ruta usuarios

// Puerto de ejecución
app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`)
})