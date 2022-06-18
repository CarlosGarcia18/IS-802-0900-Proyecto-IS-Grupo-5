const conection = require('../config/connection')
const controller = {}

controller.test = (req,res) => {
    res.send('get routes')
}



module.exports = controller