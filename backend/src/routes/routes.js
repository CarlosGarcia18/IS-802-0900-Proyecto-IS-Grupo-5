const routers = require('express').Router()
const conexion=require('../config/connection')


const customerU = require('../controllers/customerUser')
const customerA = require('../controllers/customerAdmin')

//we assign the routers
 
routers.get('/userTest', customerU.test)
routers.get('/adminTest', customerA.test)
routers.get('/user', customerA.query)

//--------Agregar Rutas------------
//Get Equipos Para visualizar una tabla
routers.get('/', (req,res) =>{
    let sql = 'select *from USER'
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            throw err
        }else{
            res.json(rows)
        }
    })
})
//Get Equipo Para recuperar datos a un id Especifico
rutas.get('/:id',(req,res) =>{
    const {id} =req.params
    let sql ='select  from USER where id_user=?'
    conexion.query(sql,(err,rows,fields) =>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//Agregar Equipos
rutas.post('/',(req,res) =>{
    const{nombre,logo} =req.body

    let sql=`insert into USER(nombre,logo) values('${var_email}','${var_name}',
    '${var_lastname}','${tex_password}','${bit_rol}','${bit_status}','${var_phone}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario agregado'})
        }
    })
})

//-----------------------------------------------
//Eliminar
rutas.delete('/:id',(req,res)=>{
    const{id}=req.params

    let sql =`delete from USER where id_user ='${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario Eliminado'})
        }
    })

})
//--------------Modificar--------------------------
rutas.put('/:id',(req,res) =>{
    const{id}=req.params
    const{nombre, logo}=req.body

    let sql = `update USER set
                var_email='${var_email}',
                var_name='${var_name}',
                var_lastname='${var_lastname}',
                tex_password='${tex_password}',
                bit_rol='${bit_rol}',
                bit_status='${bit_status}',
                var_phone'${var_phone}'`

    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario Modificado'})
        }
    })
})
//------------------------------------------------


module.exports = routers