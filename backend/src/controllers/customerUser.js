const conection = require('../config/connection')//requerimos la conexion a la BD 
const controller = {} //definicion de controller que guardara las rutas



//funcion de prueba
controller.test = (req,res) => {
    res.send('get routes')
}


//funcion para obtener un usuario por el id
controller.getUser = (req,res) =>{
    const {id} =req.params
    let sql =`select * from USER where id_user=${id}`
    conection.query(sql,(err,rows,fields) =>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json(rows)
        }
    })
}

//funcion para incertar un usuario
controller.postUser = (req,res) =>{
    const {fk_id_department,var_email,var_name,var_lastname,tex_password,bit_rol,bit_status,var_phone} = req.body
    let sql=`insert into USER(fk_id_department,var_email,var_name,var_lastname,tex_password,bit_rol,bit_status,var_phone) values(${fk_id_department},'${var_email}','${var_name}',
    '${var_lastname}','${tex_password}',${bit_rol},${bit_status},'${var_phone}')`
    //try {
        conection.query(sql,(err,rows,fields)=>{
            if(err) res.send(err.sqlMessage);
            else{
                res.json({status: 'Usuario agregado'})
            }
        })
    //} catch (error) {
        
    //}
    
}

//Funcion para eliminar usuario dado un id
controller.deleteUser = (req,res)=>{
    const {id} = req.params

    let sql =`delete from USER where id_user ='${id}'`
    conection.query(sql,(err,rows,fields)=>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json({status: 'Usuario Eliminado'})
        }
    })

}

//funcion para actualizar un usuario dado un id
controller.updateUser = (req,res) =>{
    const{id}=req.params
    const{fk_id_department,var_email,var_name,var_lastname,tex_password,bit_rol,bit_status,var_phone}=req.body

    let sql = `update USER set fk_id_department=${fk_id_department}, `+
    `var_email='${var_email}', `+
    `var_name='${var_name}', `+
    `var_lastname='${var_lastname}', `+
    `tex_password='${tex_password}', `+
    `bit_rol=${bit_rol}, `+
    `bit_status=${bit_status}, `+
    `var_phone='${var_phone}' where id_user = ${id}`

    conection.query(sql,(err,rows,fields)=>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json({status: 'Usuario Modificado'})
        }
    })
}
//actualizar password

controller.updatePass=(req,res)=>{
    const{id}=req.params
    const{tex_password, pass_confirm}=req.body

    let sql = `update USER set tex_password=${tex_password}
    WHERE id_user = ${id}` ;
    conection.query(sql,(err,rows,fields)=>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json({status: 'Contrasena Actualizada'})
        }
    })
}
    

/*{
    "id_user":"3",
    "fk_id_department":1,
    "var_email":"luis2@gmail.com",
    "var_name":"prueba",
    "var_lastname":"base",
    "tex_password":"12345",
    "bit_rol":1,
    "bit_status":1,
    "var_phone":"98765645"
} */

//exportacion de controler
module.exports = controller