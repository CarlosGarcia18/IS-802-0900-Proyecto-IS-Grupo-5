const gen = require("./createPDF");
const conection = require('../config/connection')


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
                    if (docExist!=0) doc.end();
                    doc = gen.generate(cat.fk_id_user) 
                    struct = gen.generateStruct(doc) 
                    doc.addStructure(struct);
                    y = 60
                    struct = gen.head(y,struct,doc)
                    y+=35
                    docExist = 1             
                }
                console.log(doc);

                struct =  gen.newCat(y,struct,doc,cat.var_name)
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
                            struct = gen.products(rows[i],y,struct,doc)
                            y+=90
                        }
                        doc.addPage()
                        y=60
                    }
                })
                
            })
        }
    })
    
}

create1()

function create1() {
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
            let cat = rows[0]
                if (idUser!=cat.fk_id_user) {
                    
                    doc = gen.generate(cat.fk_id_user) 
                    struct = gen.generateStruct(doc) 
                    doc.addStructure(struct);
                    y = 60
                    struct = gen.head(y,struct,doc)
                    y+=35
                    docExist = 1             
                }
                console.log(doc);

                struct =  gen.newCat(y,struct,doc,cat.var_name)
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
                            struct = gen.products(rows[i],y,struct,doc)
                            y+=90
                        }
                        struct.end()
                        doc.addPage()
                        y=60
                    }
                })

                doc.end();
                
            
        }
    })
    
}