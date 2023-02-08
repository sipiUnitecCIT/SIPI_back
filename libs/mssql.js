const { Sequelize } = require("sequelize")
const config = require("../config/config");
const tedious = require("tedious")

const { dbUser, dbPassword, dbHost, dbPort, dbName } = config

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  // port: dbPort,
  dialect: "mssql",
  dialectModule: tedious,
  // logging: true,
})

// sequelize.sync();

module.exports = sequelize;