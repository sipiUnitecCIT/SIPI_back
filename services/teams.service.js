const sequelize = require("../libs/mssql");

class TeamsService {

  async findAll() {
    // const [data] = await Team.findAll()
    const [data, length] = await sequelize.query("SELECT * FROM dbo.tbl_equipo")
    return {data, length};
  }

  async findOne(id) {
    // const [data] = await Team.findByPk(id)
    // return data;
  }

  async create() {

  }

  async update() {
    // Code
  }

  async delete() {
    // Code
  }
}

module.exports = TeamsService;