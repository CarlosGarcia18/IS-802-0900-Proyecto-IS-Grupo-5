const path = require('path')

function information(doc) {
  // Metadatos del archivo PDF
  doc.info['Title'] = 'Productos Recomendados';
  doc.info['Author'] = 'Plazitanet';
}

function fonts(doc) {
  doc.registerFont('Nunito-Light', path.join(__dirname,'./fonts/Nunito-Light.ttf'));
  doc.registerFont('Nunito-Bold', path.join(__dirname,'./fonts/Nunito-Bold.ttf'));
  doc.registerFont('OpenSans-Light', path.join(__dirname,'./fonts/OpenSans-Light.ttf'));
  doc.registerFont('OpenSans-Bold', path.join(__dirname,'./fonts/OpenSans-Bold.ttf'));
  doc.registerFont('Poppins-Light', path.join(__dirname,'./fonts/Poppins-Light.ttf'));
  doc.registerFont('Poppins-Regular', path.join(__dirname,'./fonts/Poppins-Regular.ttf'));
}

function head(y,doc) {
      let grad = doc.linearGradient(0, 0, 100, 0);
      grad.stop(0, '#74ebd5')
          .stop(1, '#9face6');
      doc
        .font('Nunito-Bold')
        .fontSize(22)
        .fill(grad)
        .text('Da un vistazo a tus productos recomendados', 50, y,{align: 'center'});
}

//nueva categoria
function newCat(y,doc,cat) {
    doc
      .font('OpenSans-Bold')
      .fontSize(18)
      .fill('#fbac38')
      .text(cat, 50, y,{align: 'center'});
}
/*doc
.font('OpenSans-Bold')
.fontSize(18)
.fill('#fbac38')
.text(cat.var_name, 50, y, { align: 'center' });*/


function products(obj,y,doc) {
        doc.image(path.join(__dirname,'../dbimagesProducts/'+obj.var_name) ,50,y,{
          fit: [80, 80], align: 'center', valign: 'center'
        })
        .font('Poppins-Light')
        .fontSize(15).fillColor('black').text(obj.var_name_product,140,y)
        .fontSize(10).text(obj.text_description)
        .font('Times-Bold').fontSize(13).fillColor('red').text("L."+obj.dou_price,{align: 'right'})
}
 /*doc.image(path.join(__dirname,'../dbimagesProducts/'+rows1[j].var_name) ,50,y,{
  fit: [80, 80], align: 'center', valign: 'center'
})
.font('Poppins-Light')
.fontSize(15).fillColor('black').text(rows1[j].var_name_product,140,y+10)
.fontSize(10).text(rows1[j].text_description)
.font('Times-Bold').fontSize(13).fillColor('red').text(rows1[j].dou_price,{align: 'right'})
*/


module.exports = 
{
  information,
  head,
  newCat,
  products,
  fonts
};


