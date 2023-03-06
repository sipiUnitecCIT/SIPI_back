const { Career, CareerModel } = require("./career.model");
const { Person, PersonModel } = require("./person.model");
const { Info, InfoModel } = require("./info.model");
const { InfoType, InfoTypeModel } = require("./infoType.model");
const { InfoConfirmed, InfoConfirmedModel } = require("./infoConfirmed.model");

function setupModels(sequelize) {
  Career.init(CareerModel, Career.config(sequelize))
  Person.init(PersonModel, Person.config(sequelize))
  Info.init(InfoModel, Info.config(sequelize))
  InfoType.init(InfoTypeModel, InfoType.config(sequelize))
  InfoConfirmed.init(InfoConfirmedModel, InfoConfirmed.config(sequelize))
  
  // Person.associate(sequelize.models)
  // Info.associate(sequelize.models)
  // InfoType.associate(sequelize.models)
  // InfoConfirmed.associate(sequelize.models)
}

module.exports = setupModels;