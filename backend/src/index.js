const express = require('express')
const morgan = require('morgan') //paquete para verificacion
const routerConstumer = require('./routes/routes')

//Configuracion del puerto del servidor
const port = (process.env.port || 3000)

//express
const app = express()

//Permitir que el servidor acepte json
app.use(express.json())

//configuracion del puerto
app.set('port',port)


//Middlewares
app.use(morgan('dev'))
app.use('/api',routerConstumer)//ruta por defecto del servidor localhost:3000/api

//iniciar express
app.listen(app.get('port'),(error)=>{
    if (error) {
        console.log('There was an error starting the server ' + error)
    } else {
        console.log('Server start ' + port)
    }
})