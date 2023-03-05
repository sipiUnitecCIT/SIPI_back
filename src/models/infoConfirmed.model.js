const { Model, DataTypes, Sequelize } = require("sequelize")
const { INFO_TABLE } = require("./info.model")
const { PERSON_TABLE } = require("./person.model")

const INFO_CONFIRMED_TABLE = "tbl_informacionConfirmada"

const InfoConfirmedSchema = {
  id_informacionConfirmada: {
    allowNull: false,
    primaryKey: true,
    unique: true,
    type: DataTypes.STRING,
  },
  id_persona: {
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: PERSON_TABLE,
      key: "id_persona",
    },
    onUpddate: "CASCADE",
    onDelete: "SET NULL",
  },
  id_informacion: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    references: {
      model: INFO_TABLE,
      key: "id_informacion",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },

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
  static associate(models) {
    // this.belongsTo(models.Info, { as: "info" })
    // this.belongsTo(models.Person, { as: "person" })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INFO_CONFIRMED_TABLE,
      modelName: "InfoConfirmed",
      timestamps: false,
    }
  }
}

module.exports = { InfoConfirmed, InfoConfirmedSchema, INFO_CONFIRMED_TABLE }