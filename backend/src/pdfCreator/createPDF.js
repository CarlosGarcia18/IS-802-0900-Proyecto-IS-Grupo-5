var PDFDocument = require('pdfkit');
var fs = require('fs');
const path = require('path')
const pdf = require('./html-pdf')

function generateStruct(doc) {
  // Initialise document logical structure
  let struct = doc.struct('Document');
  

  return struct
}

function generate(id) {
  // Create a new PDFDocument
  let doc = new PDFDocument({
    pdfVersion: '1.5',
    lang: 'en-US',
    tagged: true,
    displayTitle: true
  });
  let r = id + '_suscription.pdf'
  let p = './src/documentPDF/' + r
  pdf.pdfCreate(r)
  console.log(fs.createWriteStream(p))
  doc.pipe(fs.createWriteStream(p));

  // Set some meta data
  doc.info['Title'] = 'Test Document';
  doc.info['Author'] = 'Devon Govett';

  return doc
}

function head(y,doc) {
      let grad = doc.linearGradient(0, 0, 100, 0);
      grad.stop(0, '#74ebd5')
          .stop(1, '#9face6');
      doc
       // .font('Palatino')
        .font('Helvetica-Bold')
        .fontSize(22)
        .fill(grad)
        .text('Da un vistazo a tus productos recomendados', 50, y,{align: 'center'});
    

}

function newCat(y,doc,cat) {
      doc
        .font('Helvetica')
        .fontSize(18)
        .fill('#fbac38')
        .text(cat, 50, y,{align: 'center'});
    
}

function products(obj,y,doc) {
        doc.image(path.join(__dirname,'../dbimagesProducts/iJhsg37391jksnjiBnGG.jpg') ,50,y,{
          fit: [80, 80], align: 'center', valign: 'center'
        })
        .font('Times-Roman')
        .fontSize(15).fillColor('black').text(obj.var_name_product,140,y)
        .fontSize(10).text(obj.text_description)
        .font('Times-Bold').fontSize(13).fillColor('red').text(obj.dou_price,{align: 'right'})
 
}


module.exports = {generate,head,newCat,products,generateStruct};


