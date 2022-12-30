const { config } = require('./../config/config');
const nodemailer = require('nodemailer');


class sendFormService {
  constructor() {
  }

  async sendMail(data) {

    const name = data.name;
    const phone = data.phone;
    const email = data.email;
    const message = data.message;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: config.mailUser, // generated ethereal user
        pass: config.mailPass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "deployrama@gmail.com", // sender address
      to: "deployrama@gmail.com", // list of receivers
      subject: `Contacto desde Pagina Web`, // Subject line
      text: "Hello world", // plain text body
      html: `<p>Nombre: ${name}</p><p>Telefono: ${phone}</p><p>Email: ${email}</p><p>Mensaje: ${message}</p>`, // html body
    });

    console.log('mail sended');
    return { response: 'mail sent' };
  }

}





module.exports = sendFormService;
