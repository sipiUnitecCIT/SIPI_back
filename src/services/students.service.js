const sequelize = require("../libs/mssql");
// const { models } = require("../libs/mssql")

// const { User } = models;

class StudentsService {
  async findAll() {
    // const [data] = await User.findAll()
    const [data, length] = await sequelize.query("SELECT * FROM dbo.tbl_estudiante")
    return {data, length};
  }

  async findOne() {

  }
}

module.exports = StudentsService;