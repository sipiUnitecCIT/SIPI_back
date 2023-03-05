const { Sequelize } = require("sequelize")
const config = require("../config");
const tedious = require("tedious");
const setupModels = require("../models");

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

module.exports = sequelize;