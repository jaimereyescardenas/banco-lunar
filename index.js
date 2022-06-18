const express = require('express')

const app = express()

// Constantes
const PORT = 3000

// Config

// Rutas
app.get('/', (req, res) => {
    res.send('Servidor configurado!')
})

// Puerto de ejecución
app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`)
})