const conection = require('../config/connection')//requerimos la conexion a la BD
const controller = {} //definicion de controller que guardara las rutas

controller.newChat = (req,res) => {
    const {fk_id_product, fk_id_user_buyer, fk_id_user_seller} = req.body

    let sql1 = `SELECT * FROM PRODUCT WHERE id_product = ${fk_id_product}`
    let sql2 = `SELECT * FROM USER WHERE id_user = ${fk_id_user_buyer}`
    let sql3 = `SELECT * FROM USER WHERE id_user = ${fk_id_user_seller}`
    let sqk = `INSERT INTO CHAT (fk_id_product, fk_id_user_buyer, fk_id_user_seller) 
        VALUES(${fk_id_product},${fk_id_user_buyer},${fk_id_product})`

    conection.query(sql1,(err,rows,fields)=>{
        if(err){
            res.json({status:'1',msg: err.sqlMessage})
        }else{
            if(rows.length!=0){
                conection.query(sql2,(err,rows,fields)=>{
                    if(err){
                        res.json({status:'2',msg: err.sqlMessage})
                    }else{
                        if(rows.length!=0){
                            if(rows.length!=0){
                                conection.query(sql3,(err,rows,fields)=>{
                                    if(err){
                                        res.json({status:'3',msg: err.sqlMessage})
                                    }else{
                                        if(rows.length!=0){
                                            
                                            conection.query(sql,(err,rows,fields)=>{
                                                if(err){
                                                    res.json({status:'4',msg: err.sqlMessage})
                                                }else{
                                                    res.json({status:'200',msg: "El nuevo chat vacio ha sido creado"})
                                                }
                                            })
                            
                            
                                        }else{
                                            res.json({status:'0',msg:'El usuario vendedor no se encuentra'})
                                        }
                            
                                    }
                            
                                })
            
                            }else{
                                res.json({status:'0',msg:'El usuario comprador no se encuentra'})
                            }
            
                        }
            
                    }
                })

            }else{
                res.json({status:'0',msg:'El producto no se encuetra'})
            }

        }

    })

}

//exportacion de controler
module.exports = controller