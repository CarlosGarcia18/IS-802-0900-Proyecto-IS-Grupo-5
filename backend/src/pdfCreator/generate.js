const gen = require("./createPDF");
const conection = require('../config/connection')
var PDFDocument = require('pdfkit');
var fs = require('fs');
const path = require('path')
const SQLconsult = require('./SQLconsults')

function create() {
    conection.query(SQLconsult.sqlGetUsers, (err2, rows2, fields) => {
        if (err2) console.log({ status: '0', msf: err.sqlMessage });
        else {
            for (let i = 0; i < rows2.length; i++) {
                conection.query(SQLconsult.sqlSuscriptions(rows2[i].id_user), (err, rows, fields) => {
                    if (err) console.log({ status: '1', msf: err.sqlMessage });
                    else {
                        if (rows.length > 0) {
                            conection.query(SQLconsult.sqlGetProducts, (err1, rows1, fields) => {
                                if (err1) {
                                    console.log({ status: '2', msf: err1.sqlMessage });
                                }
                                else {
                                    let doc = new PDFDocument({
                                        pdfVersion: '1.5',
                                        lang: 'en-US',
                                        tagged: true,
                                        displayTitle: true
                                    });
                                    let p = './src/documentPDF/' + rows2[i].id_user + '_suscription.pdf'
                                    doc.pipe(fs.createWriteStream(p));

                                    gen.information(doc)//genera la informacion
                                    gen.fonts(doc)//genera las fuentes
                                    var y = 60
                                    gen.head(y, doc)//Creacion del encabezado
                                    y += 35
                                    for (let h = 0; h < rows.length; h++) {
                                        let cat = rows[h]
                                        gen.newCat(y, doc, cat.var_name)//Titulo de la categoria
                                        y += 30
                                        var e = 0
                                        for (let j = 0; j < rows1.length; j++) {
                                            if (rows1[j].fk_id_product_category == cat.fk_id_product_category) {
                                                if (e > 6) break
                                                gen.products(rows1[j], y, doc, e)//genera la targeta del producto
                                                e++
                                                y += 90
                                            }
                                        }
                                        y = 60
                                        if (h != (rows.length - 1)) {
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
            console.log("Proceso de creacion de pdfs: Finalizado");
        }
    })
}

module.exports = { create }