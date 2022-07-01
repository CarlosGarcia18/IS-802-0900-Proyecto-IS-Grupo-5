//config para correos
/*const nodemailer =require('nodemailer');
//const{ response }=require('express');
///////////////////////////////////



const envioCorreo=(req,res)=>{
    let body=req.body;
    let config= nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure:true,
        auth:{
            user:'plazitanet1@gmail.com',
            pass:'fktlxsridrbusxrk'
        }
    });

    const opc={
        from:'"Plazita Net" <plazitanet1@gmail.com>',
        subject:"Recuperacion de cuenta",
        to: body.email,
        text: 'Hola, a continuacion te proporcionamos el codigo de verificacion para el cambio de contrasena'
    };

    config.sendMail(opc, function(error, result){
        if (error) return res.json({ok:false,msg:error})
        return res.json({
            ok:true,
            msg:result
        })
    })
}

module.exports={envioCorreo}
/////////////////////////////////////////////////////////////
*/
