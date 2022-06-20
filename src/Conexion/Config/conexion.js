const mysql=require('mysql');
const conexion = mysql.createConnection({
    /* Agregar los datos de donde esta ubicada la base de Datos, la base de datos usada y el puerto*/
    host:  '',
    user:  '',
    password:'',
    port : 3306,
    database:''
});

conexion.connect((err)=>{
    if(err){
        console.log('A ocurrido un error: '+err)
    }else{
        console.log('La base de Datos se conecto!!')
    }
});

//Exportamos la conexion para usarse en cualquier parte
module.exports= conexion;
