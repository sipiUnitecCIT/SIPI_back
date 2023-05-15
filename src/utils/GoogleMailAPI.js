import { google } from "googleapis"
import { account_transport } from "../config";
import nodemailer from "nodemailer"

const { OAuth2 } = google.auth;

const { clientId, clientSecret, refreshToken } = account_transport.auth

const REDIRECT_URL = "https://developers.google.com/oauthplayground"

const getTransporter = async () => {
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

export default getTransporter;