const gen = require("./createPDF");
const conection = require('../config/connection')
var PDFDocument = require('pdfkit');
var fs = require('fs');
const path = require('path')

create1()

function create1() {
    let sql2 = "SELECT * FROM user"
    conection.query(sql2, (err2, rows2, fields) => {
        if (err2) console.log({ status: '0', msf: err.sqlMessage });
        else {
            for (let i = 0; i < rows2.length; i++) {
                let sql = "SELECT fk_id_user,fk_id_product_category,var_name FROM subscription,product_category"
                    + " where subscription.fk_id_product_category = product_category.id_product_category"
                    + ` AND fk_id_user=${rows2[i].id_user}`
                conection.query(sql, (err, rows, fields) => {
                    if (err) console.log({ status: '1', msf: err.sqlMessage });
                    else {
                        if (rows.length > 0) {
                            let sql1 = "SELECT fk_id_product_category,product.var_name AS var_name_product,text_description,"
                                            + "dou_price,photographs.var_name FROM product LEFT OUTER JOIN  photographs ON "
                                            + "photographs.fk_id_product=product.id_product WHERE fk_id_product_status = 1 AND "
                                            + `bit_availability = 1 GROUP BY product.id_product `
                                            + "ORDER BY int_views DESC"
                            conection.query(sql1, (err1, rows1, fields) => {
                                if (err1){
                                    console.log({ status: '2', msf: err1.sqlMessage }); 
                                } 
                                else {
                                    let doc = new PDFDocument({
                                        pdfVersion: '1.5',
                                        lang: 'en-US',
                                        tagged: true,
                                        displayTitle: true
                                    });
                                    let r = rows2[i].id_user + '_suscription.pdf'
                                    let p = './src/documentPDF/' + r
                                    //pdf.pdfCreate(r)
                                    //console.log(fs.createWriteStream(p))
                                    doc.pipe(fs.createWriteStream(p));
        
                                    // Set some meta data
                                    doc.info['Title'] = 'Test Document';
                                    doc.info['Author'] = 'Devon Govett';
                                    var y = 60
                                    let grad = doc.linearGradient(0, 0, 100, 0);
                                    grad.stop(0, '#74ebd5')
                                        .stop(1, '#9face6');
                                    doc
                                        // .font('Palatino')
                                        .font('Helvetica-Bold')
                                        .fontSize(22)
                                        .fill(grad)
                                        .text('Da un vistazo a tus productos recomendados', 50, y, { align: 'center' });
                                    y += 35
                                    for (let h = 0; h < rows.length; h++) {
                                        let cat = rows[h]
                                        doc
                                            .font('Helvetica')
                                            .fontSize(18)
                                            .fill('#fbac38')
                                            .text(cat.var_name, 50, y, { align: 'center' });
                                        y += 30
                                        var e = 0
                                        for (let j = 0; j < rows1.length; j++) {
                                            if (rows1[j].fk_id_product_category==cat.fk_id_product_category) {
                                                if (e>6) break
                                                gen.products(rows1[j],y,doc)
                                                /*doc.image(path.join(__dirname,'../dbimagesProducts/'+rows1[j].var_name) ,50,y,{
                                                    fit: [80, 80], align: 'center', valign: 'center'
                                                  })
                                                  .font('Times-Roman')
                                                  .fontSize(15).fillColor('black').text(rows1[j].var_name_product,140,y+10)
                                                  .fontSize(10).text(rows1[j].text_description)
                                                  .font('Times-Bold').fontSize(13).fillColor('red').text(rows1[j].dou_price,{align: 'right'})
                                                */
                                                e++
                                                y += 90
                                            }
                                        }
                                        y=60
                                        if(h!=(rows.length-1)){
                                            doc.addPage()
                                        }
                                    }
                                    doc.end()
                                }
                            })
                            
                        }
                    }
                })
            }
        }
    })
}