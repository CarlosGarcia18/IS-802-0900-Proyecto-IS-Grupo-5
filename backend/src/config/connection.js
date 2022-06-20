//Llama la dependencia de Mysql
const mysql= require('mysql');
//Crea todos los parametros que se requieren para la conexion
const conexion=mysql.createConnection({
    host:'localhost',
    user:'',
    password:'',
    port:8080,
    database:'PLAZITANET'
});

conexion.connect((err)=>{
    if(err){
        console.log('A ocurrido un error: '+err)
    }else{
        console.log('la base de Datos se conecto')
    }
});

//Exportamos la conexion
module.exports=conexion;