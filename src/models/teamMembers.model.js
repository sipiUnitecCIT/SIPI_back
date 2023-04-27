import { Model, DataTypes } from "sequelize"

export const TEAM_MEMBER_TABLE = "equipoMiembro"

export const TeamMemberModel = {
  id_equipoMiembro:{
    primary_key: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  id_persona:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  equipoMiembro_periodoActual:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  equipoMiembro_periodoCreacion:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  equipoMiembro_status:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  equipoMiembro_nota:{
    allowNull: true,
    type: DataTypes.INTEGER,
  },
}
export class TeamMember extends Model {
  static config (sequelize) {
    return {
      sequelize,
      tableName: TEAM_MEMBER_TABLE,
      modelName: "TeamMember",
      timestamps: false,
    }
  }
}