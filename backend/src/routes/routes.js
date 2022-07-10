const routers = require('express').Router()//Direccionamiento en express

const customerU = require('../controllers/customerUser')//funciones de llamada por parte del usuario
const customerA = require('../controllers/customerAdmin')//funciones de llamada por parte del administrador
const customerO = require('../controllers/customerOptions')//funciones de llamada por parte del administrador

const path = require('path')
const multer = require('multer')

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-plazitanet-' + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
}).single('image')


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

//trae todos los departamentos
routers.get('/departament',customerO.getDepartament)

//Envia la actualizacion de la contraseña body => var_email, tex_password
routers.put('/userPassword',customerU.updatePasswordUser)

//Verificacion del login
routers.get('/auth',customerU.auth)

//enviar correo
routers.post('/credential', customerU.envioCodigoCorreo )

//verificar el codigo que se ha ingresado
routers.post('/credential/confirm', customerU.confirmaCodigo)

//trae los productos disponible segun los diferentes filtros
routers.post('/productFiltering',customerO.productFiltering)

routers.get('/productUser/:id',customerU.productUser)

//Agregar un producto
routers.post('/newProduct',customerO.postProduct)

//Subir imagenes
routers.post('/product/postImage', fileUpload, customerO.postImage)

//Eliminar un producto dado un id // Elimina todas las imagenes del producto
routers.delete('/product/delete/:id',customerO.deleteProduct)


//exportacion de rutas
module.exports = routers
//module.exports=app
