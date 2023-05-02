import { google } from "googleapis"
import { account_transport } from "../config";
import nodemailer from "nodemailer"

const { OAuth2 } = google.auth;

const { clientId, clientSecret, refreshToken } = account_transport.auth

const REDIRECT_URL = "https://developers.google.com/oauthplayground"

const getTransporter = async (callback) => {
  const oauth2Client = new OAuth2(clientId, clientSecret, REDIRECT_URL)

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
    tls: { rejectUnauthorized: false }
  })

  const accessToken = await oauth2Client.getAccessToken()

  account_transport.auth.accessToken = accessToken

  const transporter = nodemailer.createTransport(account_transport)
  return transporter;
}

const pikachuImage = "https://as01.epimg.net/epik/imagenes/2018/11/16/portada/1542384053_864693_1542384302_noticia_normal.jpg"

(async () => {
  const transporter = await getTransporter()
  try {
    await transporter.sendMail({
      from: 'Fernando Zamudio <sipiunitec@gmail.com>', // sender address
      to: "ommv.17@gmail.com", // list of receivers
      subject: "Notificación desde el Trabajo", // Subject line
      html: `
        <div>
          <h2><strong>Mensaje enviado desde el trabajo</strong></h2>
          <img src="${pikachuImage}" width="300" height="168" alt="pikachu-sorprendido.jpg" />
        </div>
      `, // html body
    })
    
    console.log("MENSAJE ENVIADO!!! :)")
  } catch (error) {
    console.log(error);    
    console.log("MENSAJE FALLIDO!!! :(")
  }
})()