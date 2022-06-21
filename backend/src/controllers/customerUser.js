const conection = require('../config/connection')
const controller = {}

controller.test = (req,res) => {
    res.send('get routes')
}

controller.getUser = (req,res) =>{
    const {id} =req.params
    let sql ='select  from USER where id_user=?'
    conexion.query(sql,(err,rows,fields) =>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
}

controller.postUser = (req,res) =>{
    const{nombre,logo} =req.body

    let sql=`insert into USER values('${id_user}','${var_email}','${var_name}',
    '${var_lastname}','${tex_password}','${bit_rol}','${bit_status}','${var_phone}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario agregado'})
        }
    })
}

controller.deleteUser = (req,res)=>{
    const{id}=req.params

    let sql =`delete from USER where id_user ='${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario Eliminado'})
        }
    })

}

controller.updateUser = (req,res) =>{
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
}


module.exports = controller