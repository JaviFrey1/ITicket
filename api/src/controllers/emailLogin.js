const nodemailer = require('nodemailer');
//const { mapFinderOptions } = require('sequelize/types/lib/utils');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'matiascostilla96@gmail.com',
        pass: 'yfiozgwacpywsjuo'
    }
})

// transporter.verify().then(() => {
//     console.log('Ready for send emails')
// })

module.exports = transporter
