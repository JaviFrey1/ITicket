const { Users} = require('../db.js');
const nodemailer = require('nodemailer');



async function ReseteoPassword (req, res) {

const email = req.body.email;
const usuario = await Users.findOne({where: { email: email}});
const iden = await Users.findOne({where: {id :usuario.id}})

if(!usuario) return res.status(401).json([]);

await usuario.update({resetPassword:true });
                                                                    

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'matiascostilla96@gmail.com',
        pass: 'yfiozgwacpywsjuo'
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
        color: #378A19;
    }
    .unorderlist {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: #F7F7F7;
        color: #378A19;
      }
    .img-card {
        margin-left: 25%;
        margin-top: 20px    
    }
    </style>
    </head>
    <body>
    <div class="containergral">
    <h1>Hola ${usuario.fullName}, hemos generado un link para que reestablescas tu contraseña</h1>
    <a href="http://localhost:3000/users/${iden}" target="_blank" rel="noopener noreferrer">click aqui</a>
    </hr>
    <b>Este enlace dura 24 horas.</b>
  
    </hr>
    <b>Gracias por confiar en nosotros!</b>
    </div>
    </body>
    </html>
    `;
  
    let mailOptions = {
      from: "Tukiteck <matiascostilla96@gmail.com>",
      to: usuario.email,
      subject: `Cambio de contraseña, usuario: ${usuario.fullName}`,
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