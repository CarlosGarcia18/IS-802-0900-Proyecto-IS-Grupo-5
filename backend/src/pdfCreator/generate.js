const gen = require("./createPDF");
const conection = require('../config/connection')
var PDFDocument = require('pdfkit');

function create() {
    let sql = "SELECT fk_id_user,fk_id_product_category,var_name FROM subscription,product_category"
            +" where subscription.fk_id_product_category = product_category.id_product_category"
            +" order by subscription.fk_id_user;"
    conection.query(sql,(err,rows,fields)=>{
        if(err) console.log({status: '0',msf:err.sqlMessage});
        else{
            let idUser = -1         //veriicacion del usuario
            let y = 60              //distancia en el eje y
            let doc         //documento pdf
            let struct      //estructura del documento
            let docExist = 0        //0 no existe
            rows.map(cat=>{
                if (idUser!=cat.fk_id_user) {
                    
                    doc = gen.generate(cat.fk_id_user)
                    y = 60
                    gen.head(y,doc)
                    y+=35
                    docExist = 1             
                }
                //console.log(doc);

                doc =  gen.newCat(y,doc,cat.var_name)
                y+=30
                let sql1 = "SELECT fk_id_product_category,product.var_name AS var_name_product,text_description,"
                +"dou_price,photographs.var_name FROM product LEFT OUTER JOIN  photographs ON "
                +"photographs.fk_id_product=product.id_product WHERE fk_id_product_status = 1 AND "
                +`bit_availability = 1 AND fk_id_product_category=${cat.fk_id_product_category} GROUP BY product.id_product `
                +"ORDER BY int_views DESC LIMIT 6;"
                conection.query(sql1,(err1,rows1,fields)=>{
                    if(err1) console.log({status: '0',msf:err.sqlMessage});
                    else{
                        for (let i = 0; i < rows.length; i++) {
                            doc = gen.products(rows[i],y,doc)
                            y+=90
                        }
                        doc.addPage()
                        y=60
                    }
                })
                doc.end();
                
            })
        }
    })
    
}

create1()

function create1() {
    let sql2 = "SELECT * FROM user"
    conection.query(sql2,(err2,rows2,fields)=>{
        if(err2) console.log({status: '0',msf:err.sqlMessage});
        else{
            for (let i = 0; i < rows2.length; i++) {
                let sql = "SELECT fk_id_user,fk_id_product_category,var_name FROM subscription,product_category"
                    +" where subscription.fk_id_product_category = product_category.id_product_category"
                    +` AND fk_id_user=${rows2[i].id_user}`
                conection.query(sql,(err,rows,fields)=>{
                    if(err) console.log({status: '1',msf:err.sqlMessage});
                    else{
                        if (rows.length>0) {
                            var doc = gen.generate(rows[0].fk_id_user)
                            var y = 60
                            gen.head(y,doc)
                            y+=35
                            rows.map(cat=>{
                                gen.newCat(y,doc,cat.var_name)
                                y+=30
                                let sql1 = "SELECT fk_id_product_category,product.var_name AS var_name_product,text_description,"
                                +"dou_price,photographs.var_name FROM product LEFT OUTER JOIN  photographs ON "
                                +"photographs.fk_id_product=product.id_product WHERE fk_id_product_status = 1 AND "
                                +`bit_availability = 1 AND fk_id_product_category=${cat.fk_id_product_category} GROUP BY product.id_product `
                                +"ORDER BY int_views DESC LIMIT 6;"
                                conection.query(sql1,(err1,rows1,fields)=>{
                                    if(err1) console.log({status: '2',msf:err.sqlMessage});
                                    else{
                                        for (let j = 0; j < rows.length; j++) {
                                            gen.products(rows[j],y,doc)
                                            y+=90
                                        }
                                        doc.addPage()
                                        y=60
                                    }
                                })
                            })
                            doc.end()
                        }
                    }
                })
            }
        }
    })
}