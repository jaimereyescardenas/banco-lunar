const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')

const app = express()

// Constantes
const PORT = 3000

// Config
app.engine('handlebars', handlebars.engine())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname,'views'))

// Rutas
app.get('/', (req, res) => {
    res.render('login')
})

// Puerto de ejecución
app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`)
})