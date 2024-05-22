
//Ejercicio 3
/* const express = require('express')
const app = express()

const PORT = 1000

app.get('/', (req, res) => {
    res.send('Este es un servidor basico usando express')
})
app.listen(PORT, () => {
    console.log(`Server iniciado https://localhost:${PORT}`)
}) */

const nodemailer = require("nodemailer");
const { errorMonitor } = require("nodemailer/lib/xoauth2");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "miltonflores2003@gmail.com",
    pass: "",
  },
});

let mail = {
    from: "miltonflores2003@gmail.com",
    to: "j.william03@hotmail.com",
    subject: "Implementación de servidor de correos",
    text: "¡Servidor de correo funcionando excelente!"
}

transporter.sendMail(mail, (error, info) => {
    if(error){
        console.error("Error sending email: ", error);
    }else {
        console.log("Email.sent.")
    }
})

