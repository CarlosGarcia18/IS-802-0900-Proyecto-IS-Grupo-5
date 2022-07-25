const conection = require('../config/connection')//requerimos la conexion a la BD 
const controller = {} //definicion de controller que guardara las rutas
const nodemailer = require('nodemailer')
const fs= require('fs').promises
const path = require('path')

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

controller.getCategory = (req,res) =>{
    let sql =`select * from PRODUCT_CATEGORY`
    conection.query(sql,(err,rows,fields) =>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json(rows)
        }
    })
}

controller.getComplaintCategories = (req,res) =>{
    let sql =`select * from COMPLAINT_CATEGORY`
    conection.query(sql,(err,rows,fields) =>{
        if(err) res.send(err.sqlMessage);
        else{
            res.json(rows)
        }
    })
}

//funcion para insertar un producto /// Sin las imagenes
controller.postProduct = (req,res) =>{
    const {fk_id_user, fk_id_department, fk_id_product_category, fk_id_product_status, var_name, text_description, dou_price} = req.body
    let sql=`insert into PRODUCT(fk_id_user, fk_id_department, fk_id_product_category, fk_id_product_status, var_name,
        int_views, text_description, dou_price, bit_availability, publication_date, expiration_date) 
        values(${fk_id_user},${fk_id_department}, ${fk_id_product_category}, ${fk_id_product_status}, '${var_name}',
        0,'${text_description}',${dou_price},1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day))`

    let sql1=`select last_insert_id() AS id`
    
        console.log(sql)
    conection.query(sql,(err,rows,fields)=>{
        if(err){ res.send({status: '0', id:""})
            console.log(err)
        } //error en consulta
        else{
            conection.query(sql1,(err,rows,fields)=>{
                console.log(rows[0])
                res.json({status: '200', id:rows[0].id}) // Consulta correcta retorna el id del producto
            })
        }
    })    
}

controller.productFiltering = (req,res) =>{
    const{fk_id_department,fk_id_product_category,dou_price,id_user}=req.body
    let sql1 = `SELECT product.id_product,if(wl.fk_id_user is NULL,"false","true") as whishlist,photographs.id_photographs,`
        +`photographs.var_name AS var_name_photo,product.fk_id_user,fk_id_department,product.var_name,text_description,dou_price,publication_date`
        + ` from product LEFT OUTER JOIN  photographs ON photographs.fk_id_product=product.id_product `
        +`LEFT OUTER JOIN  wish_list wl ON wl.fk_id_product=product.id_product AND wl.fk_id_user=${id_user}  where `
    if(fk_id_department!="") sql1 += `fk_id_department = ${fk_id_department} AND `
    if(fk_id_product_category!="")  sql1 += `fk_id_product_category=${fk_id_product_category} AND `
    if(dou_price!="") sql1 +=  `dou_price <= ${dou_price} AND `
    sql1 += `bit_availability = 1 group by product.id_product ORDER BY publication_date DESC`

    
    conection.query(sql1,(err,rows,fields)=>{
        if(err) res.json(err);//posible error en consulta
        else{
            res.json(rows)//todo salio bien
        }
        })
}

/*
{
    "fk_id_department":"",
    "fk_id_product_category":"",
    "dou_price":""
}
*/

//Funcion para eliminar producto dado un id
controller.deleteProduct = (req,res)=>{
    const {id} = req.params

    let sql = `SELECT var_name FROM plazitanet.photographs WHERE fk_id_product =${id}`
    let sql2 =`delete from PRODUCT where id_product =${id}`
    
    conection.query(sql,(err,rows,fields)=>{
        if(err) res.json({status:'1', msg:sqlMessage});
        else{
            
            //Elimina todas las imagenes que contiene el producto del servidor
            const files = []

            for(var index in rows){
                console.log(index + "--------------------")
                console.log(rows[index].var_name)
                files.push("src/dbimagesProducts/" + rows[index].var_name)

            }

            Promise.all(files.map(file => fs.unlink(file)))
            .then(() => {
                console.log('Todos los archivos se eliminaron del servidor')
            })
            .catch(err => {
                console.error('Ocurrio un error al borrar los archivos', err)
            })

            //Elimina el producto
            conection.query(sql2,(err,rows,fields)=>{
                if(err) res.json({status:'0', msg:err.sqlMessage});
                else{
                    res.json({status:'200', msg:'Producto Eliminado'})
                }
            })

        }
    })

}


controller.postImage = (req,res) =>{

    const{id} = req.params
    const name = req.file.filename
    const extension = req.file.mimetype

    let sql= `INSERT INTO photographs(var_name, var_extension, fk_id_product)
        VALUES('${name}','${extension}',${id})`

    conection.query(sql, (err, rows) => {
        if(err) return res.json({status:'0', msg:err.sqlMessage});
        else{
            res.send({status:'200', msg:'Imagen agregada al producto'})
        }
        
    })
    
}


controller.getProducto=(req,res)=>{
    const{id_producto}=req.params

    let sql1=`SELECT prod.fk_id_user, prod.var_name AS titulo, prod.text_description, prod.int_views, prod.dou_price, 
    u.var_name AS nombre, u.var_lastname AS apellido, cat.var_name AS categoria, dep.var_name AS departamento, stat.var_name AS estado FROM product prod 
    INNER JOIN user u ON prod.fk_id_user=u.id_user
    INNER JOIN product_category cat ON prod.fk_id_product_category=cat.id_product_category
    INNER JOIN department dep ON prod.fk_id_department=dep.id_department
    INNER JOIN product_status stat ON prod.fk_id_product_status=stat.id_product_status
    WHERE id_product=${id_producto}`

    conection.query(sql1,(err,rows,fields)=>{
        if(err) return res.json({status:'0', msg:err.sqlMessage});
        else{
            res.json(rows)
        }
    })
}

controller.getProductImages=(req,res)=>{
    const{id_producto}=req.params

    let sql1=  `SELECT var_name FROM photographs WHERE fk_id_product=${id_producto} `

    conection.query(sql1,(err,rows,fields)=>{
        if(err) return res.json({status:'0', msg:err.sqlMessage});
        else{
            res.json(rows)
        }
    })
}
module.exports = controller