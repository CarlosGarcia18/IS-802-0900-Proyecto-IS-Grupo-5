var PDFDocument = require("pdfkit");
var fs = require('fs');
const path = require('path')
function create(){
  for (let i = 1; i < 3; i++) {
    let doc = new PDFDocument({
      pdfVersion: '1.5',
      lang: 'en-US',
      tagged: true,
      displayTitle: true
    });
    doc.pipe(fs.createWriteStream(`./src/documentPDF/${i}_suscription.pdf`));
    
    doc.text('First Page', { paragraphGap: 4 });
    doc
      .text('Continued text ', { continued: true })
      .text('with a link inside', {
        continued: true,
        link: 'http://pdfkit.org',
        underline: true
      })
      .text(' and remaining text', {
        continued: false,
        link: null,
        underline: false
      });
    doc.text('Link to golugulo', { link: 'https://www.google.com/' });
    let y = 150
    let grad = doc.linearGradient(0, 0, 100, 0);
    grad.stop(0, '#74ebd5')
      .stop(1, '#9face6');
    doc
      // .font('Palatino')
      .font('Helvetica-Bold')
      .fontSize(22)
      .fill(grad)
      .text('Da un vistazo a tus productos recomendados', 50, y, { align: 'center' });
    
    y+=40
      doc.image(path.join(__dirname, '../dbimagesProducts/iJhsg37391jksnjiBnGG.jpg'), 50, y, {
      fit: [80, 80], align: 'center', valign: 'center'
    })
      .font('Times-Roman')
      .fontSize(15).fillColor('black').text("obj.hola mundo", 140, y)
      .fontSize(10).text("obj.text_description")
      .font('Times-Bold').fontSize(13).fillColor('red').text("obj.dou_price", { align: 'right' })
    
    doc.end();
    
  }
  
}

create()
