const { Users } = require('../db.js');
const nodemailer = require('nodemailer');



async function ReseteoPassword(req, res) {

    const { id } = req.params;
    // console.log('ESTOY EN BACK',email)
    // const usuario = await Users.findOne({where: { email: email}});
    const iden = await Users.findOne({ where: { id: id } })
    console.log('IDEN BACK=>>>>>>>>', iden)

    if (!id) return res.status(401).json([]);

    await iden.update({ resetPassword: true });


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'tukiteckpf@gmail.com',
            pass: 'rlggmbgbkngqahnn'
        }
    })



    let htmlCreator = `
    <html>
    <head>
    <style type="text/css">
    .containergral {
        align-content: center;
        justify-content: center;
        padding: 30px;
        position: relative;
        background: #EFEFEF;
        }
    h1 {
        color: #000000CC;
    }
    .unorderlist {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: #F7F7F7;
        color: #000000CC;
      }
    .img-card {
        margin-left: 25%;
        margin-top: 20px    
    }
    .ap{
        text-decoration: none;
    }
    
    </style>
    </head>
    <body>
    <div class="containergral">
    <h1>Hola ${iden.fullName}, hemos generado un link para que reestablescas tu contraseña</h1>
    <a href="http://localhost:3000/confirm/${iden.id}" target="_blank" rel="noopener noreferrer" class="ap">Click aqui</a>
    </hr>
    <b>Este enlace dura 24 horas.</b>
  
    </hr>
    <b>Gracias por confiar en nosotros!</b>
    </div>
    </body>
    </html>
    `;

    let mailOptions = {
        from: "Tukiteck <tukiteckpf@gmail.com>",
        to: iden.email,
        subject: `Cambio de contraseña, usuario: ${iden.fullName}`,
        html: htmlCreator,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.status(500).send(error.message);

        res.status(200).json({ answer: req.body });
    });

}


module.exports = {
    ReseteoPassword
}