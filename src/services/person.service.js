const createHttpError = require("http-errors");
const sequelize = require("../libs/mssql");
const crypto = require("crypto")

const { Person } = sequelize.models

class PersonService {
  
  async getAll() {
    const personList = await Person.findAll()
    return {
      data: personList,
      length: personList.length,
    }
  }

  async findOne(id) {
    const person = await Person.findByPk(id)

    if (person) {
      return person;
    } else {
      throw new createHttpError.NotFound()
    }
  }

  // async create(info) {
  //   const newPerson = await Person.create({
  //     ...info,
  //     id_persona: crypto.randomUUID()
  //   })
  //   return newPerson;
  // }

  // async update(id, changes) {
  //   const person = await this.findOne(id)
  //   const modifiedPerson = await person.update(changes)
  //   return modifiedPerson;
  // }

  // async delete(id) {
  //   const person = await this.findOne()
  //   await person.destroy()
  //   return id;
  // }
}

module.exports = PersonService;