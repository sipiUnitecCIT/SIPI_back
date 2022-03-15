const { Sequelize, DataTypes,  Model } = require("sequelize");

const TEAM_TABLE = "teams";

const TeamSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  logo: {
    allowNull: true,
    type: DataTypes.BLOB,
  },
  cover: {
    allowNull: true,
    type: DataTypes.BLOB,
  },
  description:{
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull: false,
    field: "created_at",
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  }
}

class Team extends Model{
  static associate(){
    
  }
  
  static config(sequelize){
    return{
      sequelize,
      tableName: TEAM_TABLE,
      modelName: "Team",
      timestamps: false,
    }
  }
}

module.exports = { TEAM_TABLE, Team, TeamSchema }