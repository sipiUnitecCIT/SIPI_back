import { Career, CareerModel } from "./career.model"
import { Person, PersonModel } from "./person.model"
import { Info, InfoModel } from "./info.model"
import { InfoType, InfoTypeModel } from "./infoType.model"
import { InfoConfirmed, InfoConfirmedModel } from "./infoConfirmed.model"
import { Team, TeamModel } from "./team.model"
import { TeamMember, TeamMemberModel } from "./teamMembers.model"

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

export default setupModels;