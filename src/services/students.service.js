import sequelize  from "../libs/mssql"

class StudentsService {
  async findAll() {
    // const [data] = await User.findAll()
    const [data, length] = await sequelize.query("SELECT * FROM dbo.tbl_estudiante")
    return {data, length};
  }

  async findOne() {

  }
}

export default StudentsService;