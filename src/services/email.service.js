import getTransporter from "../utils/GoogleMailAPI"

const pikachuImage = "https://as01.epimg.net/epik/imagenes/2018/11/16/portada/1542384053_864693_1542384302_noticia_normal.jpg"

class EmailService {
  sendNotification = async ({ emails }) => {
    const transporter = await getTransporter()

    const list = emails.join(", ")

    console.log("list:", list);

    await transporter.sendMail({
      from: 'Proyectos Institucionales <sipiunitec@gmail.com>', // sender address
      to: list, // list of receivers
      subject: "Notificación de Proyectos Institucionales", // Subject line
      html: `
        <div>
          <h2><strong>Mensaje enviado desde el trabajo</strong></h2>
          <img src="${pikachuImage}" width="300" height="168" alt="pikachu-sorprendido.jpg" />
        </div>
      `, // html body
    })

    return `Mensajae enviado a ${list}!!! :)`
  }
}

export default EmailService;