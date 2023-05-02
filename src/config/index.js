require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || "dev",
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
}


export const account_transport = {
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "sipiunitec@gmail.com",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: "",
  }
}

export default config;