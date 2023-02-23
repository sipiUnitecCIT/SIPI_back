const { Model, DataTypes, Sequelize } = require("sequelize/types");
const { extensions } = require("sequelize/types/utils/validator-extras");

const INFO_TABLE = "dbo.tbl_informacion"

const InfoSchema = {
  id_informacion: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  id_informacionTipo: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  informacion_idPublicador: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  
  
  id_equipo:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  informacion_fechaPublicacion: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  informacion_fechaExpiracion: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  informacion_titulo: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  informacion_cuerpo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}

class Info extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: INFO_TABLE,
      modelName: "Info",
      timestamps: false,
    }
  }
}

module.exports = { InfoSchema, Info, INFO_TABLE }