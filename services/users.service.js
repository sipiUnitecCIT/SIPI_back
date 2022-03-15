const { models } = require("../libs/postgres")

const { User } = models;

class UsersService {
  async findAll() {
    const [data] = await User.findAll()
    return data;
  }

  async findOne() {

  }
}

module.exports = UsersService;