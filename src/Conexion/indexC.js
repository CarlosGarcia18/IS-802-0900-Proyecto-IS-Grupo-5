//Llamamos la conexion
require('./Config/conexion');

const express = require('express');
//Recupera el puerto en el que esta trabajando y si se encuentra ocupado usa el puerto 3000
const port =(process.env.port || 3000);

//express
const app= express();

//config
app.set('port',port)

//rutes
//---agregr rutadas
app.use('/api',require('./rutas'))

//Iniciar Express
app.listen(app.get('port'),(error) =>{
    //Por si encuentra algun error en el puerto
    if(error){
        console.log('Error al iniciar el servidor: '+ error)
    }else{
        console.log('Servidor iniciado en el Puerto: '+port)
    }
})