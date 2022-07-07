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

controller.productFiltering = (req,res) =>{
    const{fk_id_department,fk_id_product_category,dou_price}=req.body

    let sql1 = `SELECT id_product,fk_id_user,fk_id_department,var_name,text_description,dou_price,publication_date`
        + ` from product where ` 
    if(fk_id_department!="") sql1 += `fk_id_department = ${fk_id_department} AND `
    if(fk_id_product_category!="")  sql1 += `fk_id_product_category=${fk_id_product_category} AND `
    if(dou_price!="") sql1 +=  `dou_price <= ${dou_price} AND `
    sql1 += `bit_availability = 1 ORDER BY publication_date DESC`

    conection.query(sql1,(err,rows,fields)=>{
        if(err) res.json(err);//posible error en consulta
        else{
            res.json(rows)//todo salio bien
            }
        }
    )
}

/*
{
    "fk_id_department":"",
    "fk_id_product_category":"",
    "dou_price":""
}
*/
module.exports = controller