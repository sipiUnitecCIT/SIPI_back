import createHttpError from "http-errors";
import sequelize from "../libs/mssql"

const { Students, Person } = sequelize.models

class StudentsService {
  async findAll() {
    // const [data, length] = await sequelize.query("SELECT * FROM dbo.tbl_estudiante")
    // const students = await Students.findAll()
    const students = await Person.findAll()
    
    const people = students.map(item => `'${item.id_persona}'`).join(", ")
    
    const [data] = await  sequelize.query(`SELECT * FROM dbo.tbl_estudiante WHERE id_persona in (${people})`)
    
    return {
      data,
      length: data.length,
    };
  }

  async findOne(id) {
    
    const person = await Person.findByPk(id)
    // const student = await Students.findOne({ where: { id_persona: id } })
    
    // SELECT * FROM [db_a94371_sipi].[dbo].[tbl_estudiante] WHERE id_persona in ('CI-V-27313279', 'CI-V-11163335');
    
    if (person) {
      return person
    } else {
      throw new createHttpError.NotFound(`Student ${id} doesn't exist!`)
    }
  }
}

export default StudentsService;