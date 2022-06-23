const express = require('express')
const morgan = require('morgan') //paquete para verificacion
const routerConstumer = require('./routes/routes')

//Configuracion del puerto del servidor
const port = (process.env.port || 3000)
const cors = require("cors")
//express
const app = express()

//Permitir que el servidor acepte json
app.use(express.json())
app.use(cors())

//configuracion del puerto
app.set('port',port)


//Middlewares
app.use(morgan('dev'))
app.use('/api',routerConstumer)//ruta por defecto del servidor localhost:3000/api

<<<<<<< HEAD

//express start
=======
//iniciar express
>>>>>>> adb68675305993b7ae4479acb0d2d7135948f45c
app.listen(app.get('port'),(error)=>{
    if (error) {
        console.log('There was an error starting the server ' + error)
    } else {
        console.log('Server start ' + port)
    }
})