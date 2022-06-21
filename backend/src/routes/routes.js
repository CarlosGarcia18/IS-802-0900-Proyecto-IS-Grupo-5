const routers = require('express').Router()
const conexion=require('../config/connection')


const customerU = require('../controllers/customerUser')//funciones de llamada por parte del usuario
const customerA = require('../controllers/customerAdmin')//funciones de llamada por parte del administrador

//direcciones de prueba
routers.get('/userTest', customerU.test)
routers.get('/adminTest', customerA.test)

//Get User Para recuperar datos a un id Especifico
routers.get('/user/:id',customerU.getUser)

//Agregar Equipos
routers.post('/user',customerU.postUser)

//Eliminar usuario
routers.delete('/user/:id',customerU.deleteUser)

//Modificar usuario
routers.put('/user/:id',customerU.updateUser)

//exportacion de rutas
module.exports = routers