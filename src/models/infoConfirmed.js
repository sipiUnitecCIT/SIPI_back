const { Model, DataTypes } = require("sequelize/types")

const INFO_CONFIRMED_TABLE = "dbo.tbl_informacionConfirmada"

const InfoConfirmedSchema = {
  id_informacionConfirmada:{
    primaryKey: true,
  },
  // id_persona: {
    
  // },
  // id_informacion: {
    
  // },
  informacionConfirmada_fechaPrimerLectura: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  informacionConfirmada_cantidadAperturas: {
    allowNull: false,
    type: DataTypes.DATE,
  }
}

class InfoConfirmed extends Model {
  static config(sequelize){
    return {
      sequelize,
      tableName: INFO_CONFIRMED_TABLE,
      modelName: "InfoConfirmed",
      timestamps: false,
    }
  }
}

module.exports = {InfoConfirmed, InfoConfirmedSchema, INFO_CONFIRMED_TABLE}