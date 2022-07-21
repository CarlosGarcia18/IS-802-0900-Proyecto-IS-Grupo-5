var PDFDocument = require('pdfkit');
var fs = require('fs');
const path = require('path')
const pdf = require('./html-pdf')

var doc = new PDFDocument({
    pdfVersion: '1.5',
    lang: 'en-US',
    tagged: true,
    displayTitle: true
});
var r = 1 + '_suscription.pdf'
var p = '../documentPDF/' + r
//pdf.pdfCreate(r)
doc.pipe(fs.createWriteStream(p));

// Set some meta data
doc.info['Title'] = 'Test Document';
doc.info['Author'] = 'Devon Govett';

var struct = doc.struct('Document');
doc.addStructure(struct);

struct.add(
    doc.struct('P', () => {
        var grad = doc.linearGradient(0, 0, 100, 0);
        grad.stop(0, '#74ebd5')
            .stop(1, '#9face6');
        doc
            // .font('Palatino')
            .font('Helvetica-Bold')
            .fontSize(22)
            .fill(grad)
            .text('Da un vistazo a tus productos recomendados', 50, 60, { align: 'center' });
    })
);


doc.end();