const createHttpError = require("http-errors");
const sequelize = require("../libs/mssql");

const { Teams, Person } = sequelize.models

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

    if (team) {
      return team;
    } else {
      throw new createHttpError.NotFound()
    }
  }

  async findMembers(id) {

    const [equipoMiembros, length] = await sequelize.query(`SELECT * FROM dbo.tbl_equipoMiembro WHERE id_equipo = ${id}`)

    const personList = await Person.findAll()

    const teamMembers = equipoMiembros.map(member => {
      
      const teamMemberInfo = personList.find(person => 
        member.id_persona === person.id_persona  
      )
      
      const teamMember = {
        ...member,
        persona: teamMemberInfo,
      }
      
      return teamMember;
    })

    return { data: teamMembers, length };
  }
}

module.exports = TeamsService;