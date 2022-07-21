var fs = require('fs');
var pdf = require('html-pdf');
var html = "<p>Criate pdf</p>"
var options = { format: 'Letter' };

function pdfCreate(rute) {
    pdf.create(html, options).toFile('./src/documentPDF/'+rute, function(err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
      });  
}

module.exports = {pdfCreate}