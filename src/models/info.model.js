const { Model, DataTypes, Sequelize } = require("sequelize")
const { INFO_TYPE_TABLE } = require("./infoType.model");
const { PERSON_TABLE } = require("./person.model");

const INFO_TABLE = "tbl_informacion"

const InfoSchema = {
  id_informacion: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  id_informacionTipo: {
    allowNull: false,
    type: DataTypes.INTEGER,
    // unique: true,
    references: {
      model: INFO_TYPE_TABLE,
      key: "id_informacionTipo"
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  informacion_idPublicador: {
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: PERSON_TABLE,
      key: "id_persona"
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },


  id_equipo: {
    allowNull: true,
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
    type: DataTypes.STRING, // THIS MUST BE STRING
  },
  informacion_cuerpo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}

class Info extends Model {
  static associate(models) {
    // this.belongsTo(models.InfoType, { as: "infoType" })
    // this.belongsTo(models.Person, { as: "person" })
    // this.hasOne(models.InfoConfirmed, {
    //   as: "infoConfirmed",
    //   foreignKey: "id_informacion"
    // })
  }

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