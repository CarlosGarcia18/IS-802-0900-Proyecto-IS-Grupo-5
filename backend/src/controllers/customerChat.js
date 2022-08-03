const conection = require('../config/connection')//requerimos la conexion a la BD
const controller = {} //definicion de controller que guardara las rutas

/*
controller.newChat = (req,res) => {
    const {fk_id_product, fk_id_user_buyer, fk_id_user_seller} = req.body
*/
function newChat(req, res){
    const {fk_id_product, fk_id_user_buyer, fk_id_user_seller} = req
  
    let sql1 = `SELECT * FROM PRODUCT WHERE id_product = ${fk_id_product}`
    let sql2 = `SELECT * FROM USER WHERE id_user = ${fk_id_user_buyer}`
    let sql3 = `SELECT * FROM USER WHERE id_user = ${fk_id_user_seller}`
    let sql = `CALL sp_newChat(${fk_id_product},${fk_id_user_buyer},${fk_id_user_seller})`

    conection.query(sql1,(err,rows,fields)=>{ // Comprueba si existe el producto
        if(err){
            res.emit('newchatresponse', {status:'1',msg: err.sqlMessage})
        }else{
            if(rows.length!=0){ 
                conection.query(sql2,(err,rows,fields)=>{ // Comprueba si existe el usuario comprador
                    if(err){
                        res.emit('newchatresponse', {status:'2',msg: err.sqlMessage})
                    }else{
                        if(rows.length!=0){
                            if(rows.length!=0){
                                conection.query(sql3,(err,rows,fields)=>{ // Comprueba si existe el usuario vendedor
                                    if(err){
                                        res.emit('newchatresponse', {status:'3',msg: err.sqlMessage})
                                    }else{
                                        if(rows.length!=0){
                                            conection.query(sql,(err,rows,fields)=>{
                                                if(err){
                                                    res.emit('newchatresponse', {status:'4',msg: err.sqlMessage})
                                                }else{
                                                    if(rows[0][0].status == 200){
                                                        res.emit('newchatresponse', {status:'200',msg: "El nuevo chat vacio ha sido creado", id_chat: rows[0][0].id_chat, messenge: []})
                                                    }else{
                                                        res.emit('newchatresponse', {status:'202',msg: "Ya existe este chat", id_chat: rows[0][0].id_chat})
                                                    }
                                                    
                                                }
                                            })
                                            /*
                                            conection.query(sql4,(err,rows,fields)=>{ // Comprueba si ya existe ese chat
                                                if(err){
                                                    res.emit('newchatresponse', {status:'4',msg: err.sqlMessage})
                                                }else{
                                                    if(rows.length!=0){
                                                        res.emit('newchatresponse', {status:'202',msg: "Ya existe este chat"})
                                                        
                                                    }else{
                                                        conection.query(sql,(err,rows,fields)=>{
                                                            if(err){
                                                                res.emit('newchatresponse', {status:'4',msg: err.sqlMessage})
                                                            }else{
                                                                
                                                                res.emit('newchatresponse', {status:'200',msg: "El nuevo chat vacio ha sido creado"})
                                                            }
                                                        })
                                                    }
                                                }

                                            })*/       
                            
                                        }else{
                                            res.emit('newchatresponse', {status:'0',msg:'El usuario vendedor no se encuentra'})
                                        }
                            
                                    }
                            
                                })
            
                            }else{
                                res.emit('newchatresponse', {status:'0',msg:'El usuario comprador no se encuentra'})
                            }
            
                        }
            
                    }
                })

            }else{
                res.emit('newchatresponse', {status:'0',msg:'El producto no se encuetra'})
            }

        }

    })

}

/*
controller.getChats = (req,res) => {
    const{id_user}=req.params
*/
function getChats(req,res){
    const{id_user}=req

    let sql = `SELECT * FROM USER WHERE id_user = ${id_user}`
    let sql1 = `SELECT USER.var_name AS Vendedor, PRODUCT.id_product, PRODUCT.var_name AS Producto, CHAT.id_chat, PHOTOGRAPHS.var_name AS Foto
        FROM (((CHAT INNER JOIN PRODUCT ON PRODUCT.id_product = CHAT.fk_id_product)
        INNER JOIN PHOTOGRAPHS ON PHOTOGRAPHS.fk_id_product = PRODUCT.id_product)
        INNER JOIN USER ON USER.id_user = CHAT.fk_id_user_seller)
        WHERE CHAT.fk_id_user_buyer = ${id_user} OR CHAT.fk_id_user_seller=${id_user}
        GROUP BY product.id_product`
    conection.query(sql,(err,rows,fields)=>{ // Comprueba si existe el usuario
        if(err){
            res.emit('getchatsresponse',({status:'1',msg: err.sqlMessage}))
        }else{
            if(rows.length!=0){
                conection.query(sql1,(err,rows,fields)=>{ // Trae el nombre del vendedor, id del producto, nombre del producto, id del chat, 
                    
                    console.log(rows)
                    res.emit('getchatsresponse',rows)

                })
              
            }else{
                res.emit('getchatsresponse',({status:'0',msg:'No se encontro el usuario'}))
            }

        }

    })

}

// Traer el ultimo mensaje y cantidad de no leidos por chat
function getlastMessage(req,res){
    const{id_chat}=req
    let sql = `SELECT text_contents AS ultimo_mensaje FROM MESSAGE WHERE fk_id_chat=${id_chat} ORDER BY MESSAGE.id_message DESC LIMIT 1;`
    let sql1 = `SELECT COUNT(*) no_leidos FROM MESSAGE WHERE MESSAGE.fk_id_chat = ${id_chat} AND MESSAGE.bit_status = 0`
    conection.query(sql,(err,rows,fields)=>{
        if(err){
            res.emit('getlastmessageresponse',({status:'2',msg: err.sqlMessage}))
        }else{
            if(rows.length!=0){
                conection.query(sql1,(err,rows2,fields)=>{
                    if(err){
                        res.emit('getlastmessageresponse',({status:'3',msg: err.sqlMessage}))
                    }else{
                        console.log(rows2[0].no_leidos)
                        res.emit('getlastmessageresponse',({"ultimo_mensaje":rows[0].ultimo_mensaje, "no_leidos":rows2[0].no_leidos}))
                    }
                })
            }else{
                res.emit('getlastmessageresponse',({status:'0',msg: "No hay mensajes en este chat"}))
            }
            
        }
    })
    
}

//Crear Mensaje
function addMessage(req, res){
    const{fk_id_chat,fk_id_user,text_contents}=req
    let sql27 = `SELECT * FROM CHAT WHERE id_chat = ${fk_id_chat}`
    let sql28 = `SELECT * FROM user WHERE id_user = ${fk_id_user}`
    let sql29 = `CALL sp_sendMessage('${text_contents}',${fk_id_chat},${fk_id_user})`
    //Conexion 1 sql27
    conection.query(sql27,( err,rows,fields)=>{
        if(err){
            res.emit('addMessageResponse',{status:'0', msg: err.sqlMessage})
        }else{
            if(rows.length!=0){
                //conexion 2 sql 28
                conection.query(sql28,(err,rows,fields)=>{
                    if(err){
                        res.emit('addMessageResponse',{status:'1',msg:err.sqlMessage})
                    }else{
                        if(rows.length!=0){
                            //conexion 3 sql 29
                            conection.query(sql29,(err,rows,fields)=>{
                                if(err){
                                    res.emit('addMessageResponse',{status:'2', msg:err.sqlMessage})
                                }else{
                                    res.emit('addMessageResponse',{status:'200' , msg: rows[0], info: 'Se envio el mensaje'})
                                }
                            })

                        }else{
                             res.emit('addMessageResponse',{status:'3' ,msg:'No se encuentra el usuario'})
                        }

                    }
                })
            }else{
                 res.emit('addMessageResponse',{status:'4' ,msg:'No se encuentra el chat'})
            }
        }
    })

}

//Listado de mensaje
function listMessages(req, res){
    console.log(req)
    const{id} = req
    let sql27=`call listMessage(${id})`
    conection.query(sql27, (err,rows, fields)=>{
        if(err){
            res.emit('listmessagesResponse',{ status:'0', msg: err.sqlMessage})
        }else{
            res.emit('listmessagesResponse',{ status:'200', msg:rows[0]})
        }
    })

}



//exportacion de modulos
module.exports = { 
    newChat, 
    getChats,
    getlastMessage, 
    addMessage,
    listMessages
}