//require('./config/connection')

const express = require('express')
const morgan = require('morgan')
const routerConstumer = require('./routes/routes')
 
const port = (process.env.port || 3000)

const app = express()

//allow
app.use(express.json)

//config
app.set('port',port)

//middlewares
app.use(morgan('dev'))
app.use('/api',routerConstumer)

//express start
app.listen(app.get('port'),(error)=>{
    if (error) {
        console.log('There was an error starting the server ' + error)
    } else {
        console.log('Server start ' + port)
    }
})