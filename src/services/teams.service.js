const createHttpError = require("http-errors");
const sequelize = require("../libs/mssql");

const { Teams } = sequelize.models

class TeamsService {

  async findAll() {
    const teams = await Teams.findAll()
    return {
      data: teams,
      length: teams.length,
    };
  }

  async findOne(id) {
    const team = await Teams.findByPk(id)
    
    if(team){
      return team;
    }else{
      throw new createHttpError.NotFound()
    }
  }
}

module.exports = TeamsService;