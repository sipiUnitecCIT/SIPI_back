const { Pool } = require("pg")

const pool = new Pool({
  port: "5432",
  host: "localhost",
  user: "orlando",
  password: "admin123",
  database: "sipi_db"
})

module.exports = pool;