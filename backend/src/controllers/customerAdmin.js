const conection = require('../config/connection')
const controller = {}//definicion de controller que guardara las rutas

//funcion de prueba
controller.test = (req,res) => {
    res.send('get routes admin')
}

controller.productsCategory = (req,res) =>{
    const {fk_id_product_category} = req.params
    let sql = `SELECT var_name,int_views FROM product as pp where fk_id_product_category=${fk_id_product_category}`
    +` and bit_availability=1 order by int_views DESC LIMIT 10;`

    if (fk_id_product_category=='0') {
        sql = `SELECT var_name,int_views FROM product as pp where `
        +` bit_availability=1 order by int_views DESC LIMIT 10;`
    }

    conection.query(sql,(err,rows,fields)=>{
        if (err) {
            res.json({status:'0', msg:sqlMessage});
        }
        let chartLabel=[];
        let chartData=[];
        rows.map(data=>{
            chartLabel.push(data.var_name)
            chartData.push(data.int_views)
        })

        res.json({status:'200', 'labels':chartLabel, 'data':chartData})
    })
}

//agregar categoria
controller.addCategory=(req,res)=>{
    const {var_name} =req.body;
    console.log( typeof var_name)
    let sql=`INSERT INTO product_category (var_name) VALUES ("${var_name}")`
    let sql1=`SELECT * FROM product_category WHERE var_name="${var_name}"`
    
    console.log(var_name)

    conection.query(sql1,(err,rows)=>{
        if(err) res.json({status:"0", msg: err.sqlMessage})
        else {
            if(rows.length==0){
                conection.query(sql,(err,rows)=>{
                    if(err) res.json({status:"0", msg:err.sqlMessage})
                    else{
                        res.json({status:"200", msg:"Se ha guardado la categoria "+ var_name})
                    }
                })
            }else{
                res.json({status:"201", msg:"Ya existe la categoria"})
            }
            }
        })
    }
//actualizar categoria
controller.updateCategory=(req,res)=>{
    
    const {var_name, id_product_category} =req.body;
    console.log(id_product_category +" "+ var_name)
    let sql=`UPDATE product_category SET var_name= "${var_name}" WHERE id_product_category=${id_product_category}`
    let sql1=`SELECT * FROM product_category WHERE var_name="${var_name}"`
    
    

    conection.query(sql1,(err,rows)=>{
        if(err) res.json({status:"0", msg: err.sqlMessage})
        else {
            if(rows.length==0){
                conection.query(sql,(err,rows)=>{
                    if(err) res.json({status:"0", msg:err.sqlMessage})
                    else{
                        res.json({status:"200", msg:"Cambios actualizados"+ var_name})
                    }
                })
            }else{
                res.json({status:"201", msg:"Ya existe la categoria"})
            }
            }
        })
}

//traer una categoria
controller.getOneCategory=(req,res)=>{
    const{id_product_category}=req.params
    let sql=`SELECT * from product_category WHERE id_product_category=${id_product_category}`

    conection.query(sql,(err,rows)=>{
        if(err){ res.json({status:"0", msg:err.sqlMessage})}
        else{
            res.json(rows)
        }
    })

}

// eliminar categoria : Actualiza la categoria del producto a indefinida y elimina la categoria


controller.deleteCategory=(req,res)=>{
    const {id_product_category, var_name}=req.body

    console.log(id_product_category)
    console.log(var_name)
    sql1=`call updateCategory(${id_product_category})`
    sql2=`DELETE from product_category WHERE id_product_category=${id_product_category}`

    conection.query(sql1,(err,rows)=>{
        if(err) return res.json ({status:"01", msg: err.sqlMessage})
        else{
            conection.query(sql2,(err,rows)=>{
                if(err) return res.json ({status:"02", msg: err.sqlMessage})
                else{
                    return res.json({status:"200", msg: "Se ha eliminado la categoria"})
                }
            })
        }
    })

}

//Listar Denuncias
controller.listarDenuncia =(req, res)=>{
    const{id}=req.params

    let sql28=`call listDenuncias12(${id})`

    conection.query(sql28, (err,rows,fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json({status:'200', msg:rows})
        }
    })
    
}

/*Modificar Estado*/
controller.cambiarEstado =(req, res)=>{
    const{id}=req.params

    let sql13=`call modificarEstado(${id})`

    conection.query(sql13, (err,rows,fields)=>{
        if(err){
            res.json({ status:'0', error: err.sqlMessage})
        }else{
            res.json({status:'200', msg:rows})
        }
    })
    
}

module.exports = controller