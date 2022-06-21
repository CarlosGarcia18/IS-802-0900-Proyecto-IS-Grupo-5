const routers = require('express').Router()
const conexion=require('../config/connection')


const customerU = require('../controllers/customerUser')
const customerA = require('../controllers/customerAdmin')

//we assign the routers
 
routers.get('/userTest', customerU.test)
routers.get('/adminTest', customerA.test)
routers.get('/user', customerA.query)
//Get Equipo Para recuperar datos a un id Especifico
routers.get('/user/:id',customerU.getUser)

//Agregar Equipos
routers.post('/user',customerU.postUser)

//-----------------------------------------------
//Eliminar
routers.delete('/user/:id',customerU.deleteUser)

//--------------Modificar--------------------------
routers.put('/user/:id',customerU.updateUser)
//------------------------------------------------


module.exports = routers