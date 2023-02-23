const { Model, Sequelize, DataTypes } = require("sequelize/types");

const INFO_TYPE_TABLE = "dbo.tbl_informacionTipo"

const InfoTypeSchema = {
  id_informacionTipo: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  informacionTipo_codigo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  informacionTipo_nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  informacionTipo_confirmacion: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
}

class InfoType extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: INFO_TYPE_TABLE,
      modelName: "InfoType",
      timestamps: false,
    }
  }
}

module.exports = { InfoType, INFO_TYPE_TABLE, InfoTypeSchema }