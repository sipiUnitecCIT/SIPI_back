import express from "express"
import getTransporter from "../utils/GoogleMailAPI"

const router = express.Router()

const pikachuImage = "https://as01.epimg.net/epik/imagenes/2018/11/16/portada/1542384053_864693_1542384302_noticia_normal.jpg"

router.post("/", async (request, response) => {
  const transporter = await getTransporter()
  try {
    await transporter.sendMail({
      from: 'Fernando Zamudio <sipiunitec@gmail.com>', // sender address
      to: "fzamudio@gmail.com", // list of receivers
      subject: "Notificación desde SIPI", // Subject line
      html: `
        <div>
          <h2><strong>Mensaje enviado desde el trabajo</strong></h2>
          <img src="${pikachuImage}" width="300" height="168" alt="pikachu-sorprendido.jpg" />
        </div>
      `, // html body
    })
    console.log("MENSAJE ENVIADO!!! :)")
    
    response.json({
      message: "Mensaje Enviado!!! :)"
    })
  } catch (error) {
    console.log(error);
    console.log("MENSAJE FALLIDO!!! :(")
  }
})

export default router;