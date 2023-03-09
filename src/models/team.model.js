const { Model, DataTypes } = require("sequelize");

const TEAMS_TABLE = "tbl_equipo"

const TeamModel = {
  id_equipo: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  equipo_nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  equipo_siglas: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  equipo_objetivoGeneral: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  equipo_objetivoEspecifico: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  equipò_correo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  equipo_whatapp: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  equipo_canalYoutube: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}

class Team extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TEAMS_TABLE,
      modelName: "Teams",
      timestamps: false,
    }
  }
}

module.exports = { Team, TEAMS_TABLE, TeamModel }