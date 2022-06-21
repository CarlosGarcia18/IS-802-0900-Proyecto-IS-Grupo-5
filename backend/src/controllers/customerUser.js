const conection = require('../config/connection')
const controller = {}

controller.test = (req,res) => {
    res.send('get routes')
}
controller.query= (req,res) =>{
    const {id} =req.params
    let sql ='select  from USER where id_user=?'
    conexion.query(sql,(err,rows,fields) =>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
}



module.exports = controller