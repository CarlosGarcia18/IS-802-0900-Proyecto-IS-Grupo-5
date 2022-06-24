const conection = require('../config/connection')//requerimos la conexion a la BD 
const controller = {} //definicion de controller que guardara las rutas

//funcion de prueba
controller.test = (req,res) => {
    res.send('get routes')
}

controller.getDepartament = (req,res) =>{
    let sql =`select * from DEPARTMENT`
    conection.query(sql,(err,rows,fields) =>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json(rows)
        }
    })
}


module.exports = controller