import { Sequelize } from "sequelize"
import config from "../config"
import tedious from "tedious"
import setupModels from "../models"

const { dbUser, dbPassword, dbHost, dbPort, dbName } = config

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  // port: dbPort,
  dialect: "mssql",
  dialectModule: tedious,
  options: {
    // Your tedious options here
    useUTC: false,
    dateFirst: 1
  }
})

setupModels(sequelize)

export default sequelize;