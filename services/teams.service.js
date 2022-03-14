const pool = require("../libs/postgres")

class TeamsService {
  constructor(){
    this.pool = pool
  }
  
  async find(){
    const query = "SELECT * FROM public.teams"
    const response = await this.pool.query(query)
    return response.rows;
  }
  
  async findOne(){
    // Code
  }
  
  async update(){
    // Code
  }
  
  async delete(){
    // Code
  }
}

module.exports = TeamsService;