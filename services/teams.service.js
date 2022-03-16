const {models} = require("../libs/postgres")

const { Team } = models;

class TeamsService {

  async findAll(){
    const [data] = await Team.findAll()
    return data;
  }
  
  async findOne(id){
    const [data] = await Team.findByPk(id)
    return data;
  }
  
  async create(){
    
  }
  
  async update(){
    // Code
  }
  
  async delete(){
    // Code
  }
}

module.exports = TeamsService;