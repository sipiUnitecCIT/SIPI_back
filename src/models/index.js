const { Person, PersonSchema } = require("./person.model");
const { Info, InfoSchema } = require("./info.model");
const { InfoType, InfoTypeSchema } = require("./infoType.model");
const { InfoConfirmed, InfoConfirmedSchema } = require("./infoConfirmed.model");

function setupModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize))
  Info.init(InfoSchema, Info.config(sequelize))
  InfoType.init(InfoTypeSchema, InfoType.config(sequelize))
  InfoConfirmed.init(InfoConfirmedSchema, InfoConfirmed.config(sequelize))
  
  Person.associate(sequelize.models)
  Info.associate(sequelize.models)
  InfoType.associate(sequelize.models)
  InfoConfirmed.associate(sequelize.models)
}

module.exports = setupModels;