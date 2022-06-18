// Import desde librerías
const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const handlebars = require('express-handlebars')

// Import desde archivos locales
const userRouter = require('./src/routes/api/userRoutes')
const loginRouter = require('./src/routes/loginRouter')

// Intanciar la app
const app = express()

// Constantes
const PORT = 3000

// Config
app.engine('handlebars', handlebars.engine())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname,'views'))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

// Rutas estáticas
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')))

// Rutas
app.get('/', (req, res) => {
    res.render('login')
})

app.use('/api/v1/users', userRouter)  // Ruta usuarios
app.use('/login', loginRouter)  // Ruta login

// Puerto de ejecución
app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`)
})