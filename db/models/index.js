const { UserSchema, User } = require("./user.model")
const { TeamSchema, Team } = require("./team.model")

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize))
  Team.init(TeamSchema, Team.config(sequelize))
}

module.exports = setupModels;