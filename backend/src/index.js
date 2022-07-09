const express = require('express')
const morgan = require('morgan') //paquete para verificacion
const routerConstumer = require('./routes/routes')
const pat = require('path')
const bodyParser=require('body-parser')//config para correo
//Configuracion del puerto del servidor
const port = (process.env.port || 3000)
const cors = require("cors")
const { patch } = require('./routes/routes')
//const { urlencoded } = require('express')
//express
const app = express()


//config para correos
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//////////////////////////////////////////////

//Permitir que el servidor acepte json
app.use(express.json())
app.use(cors())

//CORREO
//app.use(require('./routes/correoRoute'))


//configuracion del puerto
app.set('port',port)


//Middlewares
app.use(morgan('dev'))
app.use(express.static(pat.join(__dirname,'dbimagesProducts')))
app.use('/api',routerConstumer)//ruta por defecto del servidor localhost:3000/api


//express start
app.listen(app.get('port'),(error)=>{
    if (error) {
        console.log('There was an error starting the server ' + error)
    } else {
        console.log('Server start ' + port)
    }
})