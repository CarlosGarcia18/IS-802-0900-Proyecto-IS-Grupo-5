const router=require('express').Router()

//Se llama a la conexion de mysql
const conexion= require('./Config/conexion')

//Asignacion de las rutas
//Metodo Get
router.get('/',(req,res) =>{
    //Es para hacer una consulta a la base de datos y ver todos los datos que tiene
    let sql ='select * from USER'
    conexion.query(sql,(err,rows,fields) =>{
        if(err){
            throw err;
        }else {
            res.json(rows)
        }
    })
})
//------------------------------------------------

router.get('/:id',(req,res) =>{
    //Para recuperar el id
    const {id} = req.params
    //Se crea la consulta para llamar a un usuario especifico 
    let sql ='select * from USER where id_user=?'
    conexion.query(sql,(err,rows,fields) =>{
        if(err){
            throw err;
        }else {
            res.json(rows)
        }
    })
})

//--------Agregar Usuario------------------
router.post('/',(req,res) =>{
    //Se crea una constante donde se recuperan los datos del usuario
    const{var_email,var_name,var_lastname,tex_password,bit_rol,bit_status,var_phone} = req.body
    
    //Se crea una variable donde se agregan los datos a insertar
    let sql=` insert into USER (var_email,var_name,var_lastname,tex_password,bit_rol,bit_status,var_phone) 
    values('${var_email}','${var_name}','${var_lastname}','${tex_password}','${bit_rol}','${bit_status}',
    '${var_phone}')`
    
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            throw err
        }else{
            res.json({status: 'Usuario agregado'})
        }
    })
})

//----------------Eliminar------------------------
router.delete('/:id',(req,res) =>{
    const{id}= req.params

    //Consulta sql
    let sql=`delete from (nombre de la tabla) where id_Usuario='${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            throw err
        }else{
            res.json({status: 'Usuario Eliminado'})
        }
    })
});

//----------Modificar----------------------------------
router.put('/id',(req,res) =>{
    const{id}=req.params
    const{nombre,correo,fecha_nacimiento} = req.body

    let sql = `update (USER) set
               nombre ='${nombre}',
               correo ='${correo}',
               fecha_nacimiento= '${fecha_nacimiento}'
               where id_Usuario = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            throw err
        }else{
            res.json({status: 'Usuario Modificado'})
        }
    })
});

//---------------------------------------------




//Exportacion de la ruta creada
module.exports=rutas;
