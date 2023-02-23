const sequelize = require("../libs/mssql");

class InfoService {
  async getAll() {
    const [data, length] = await sequelize.query("SELECT * FROM dbo.tbl_informacion")
    return { data, length };
  }
}

module.exports = InfoService;