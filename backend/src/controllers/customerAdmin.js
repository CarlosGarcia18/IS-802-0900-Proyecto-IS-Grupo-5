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

module.exports = controller