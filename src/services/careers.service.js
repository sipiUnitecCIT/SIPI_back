const sequelize = require("../libs/mssql");

class CareersService {
  async findAll() {
    // const [data] = await User.findAll()
    const [data, length] = await sequelize.query("SELECT * FROM dbo.tbl_carrera")
    return {data, length};
  }

  async findOne() {

  }
}

module.exports = CareersService;