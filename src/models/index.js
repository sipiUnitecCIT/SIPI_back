const { Career, CareerModel } = require("./career.model");
const { Person, PersonModel } = require("./person.model");
const { Info, InfoModel } = require("./info.model");
const { InfoType, InfoTypeModel } = require("./infoType.model");
const { InfoConfirmed, InfoConfirmedModel } = require("./infoConfirmed.model");
const { Team, TeamModel } = require("./team.model");
const { TeamMember, TeamMemberModel } = require("./teamMembers.model");

function setupModels(sequelize) {
  
  Career.init(CareerModel, Career.config(sequelize))
  Person.init(PersonModel, Person.config(sequelize))
  Team.init(TeamModel, Team.config(sequelize))
  TeamMember.init(TeamMemberModel, TeamMember.config(sequelize))
  
  Info.init(InfoModel, Info.config(sequelize))
  InfoType.init(InfoTypeModel, InfoType.config(sequelize))
  InfoConfirmed.init(InfoConfirmedModel, InfoConfirmed.config(sequelize))
  
  // Person.associate(sequelize.models)
  // Info.associate(sequelize.models)
  // InfoType.associate(sequelize.models)
  // InfoConfirmed.associate(sequelize.models)
}

module.exports = setupModels;