const routers = require('express').Router()//Direccionamiento en express


const customerU = require('../controllers/customerUser')//funciones de llamada por parte del usuario
const customerA = require('../controllers/customerAdmin')//funciones de llamada por parte del administrador
const customerO = require('../controllers/customerOptions')//funciones de llamada por parte del administrador


//Direcciones de prueba
routers.get('/userTest', customerU.test)
routers.get('/adminTest', customerA.test)

//Get User Para recuperar datos a un id Especifico /se debe especificar el id en la ruta/
routers.get('/user/:id',customerU.getUser)

//Agregar usuario (body -> json)
routers.post('/user',customerU.postUser)

//Eliminar usuario dado un id /se debe especificar el id en la ruta/
routers.delete('/user/:id',customerU.deleteUser)

//Modificar usuario dado un id  (body -> json) /se debe especificar el id en la ruta/
routers.put('/user/:id',customerU.updateUser)
//auth
routers.post('/auth', customerU.auth)
//routers.put('/passwordUpdate/:token', customerU.updatePass)

//trae todos los departamentos
routers.get('/departament',customerO.getDepartament)
//exportacion de rutas
module.exports = routers