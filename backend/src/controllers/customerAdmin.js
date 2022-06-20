const conection = require('../config/connection')
const controller = {}

controller.test = (req,res) => {
    res.send('get routes admin')
}
controller.query=(req,res) =>{
    let sql ='select *from tb_Equipo'
    conexion.query(sql,(err,rows,fields) =>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
}


module.exports = controller