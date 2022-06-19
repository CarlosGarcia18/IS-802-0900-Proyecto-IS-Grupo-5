const rutas=require('express').Router()


//Asignacion de las rutas
rutas.get('/', function(req,res) {
    res.send('Prueba de la Ruta')
});




//Exportacion de la ruta creada
module.exports=rutas;
