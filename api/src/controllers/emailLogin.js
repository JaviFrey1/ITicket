const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'matiascostilla96@gmail.com',
        pass: 'yfiozgwacpywsjuo'
    }
})

module.exports = transporter
