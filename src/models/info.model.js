import { Model, DataTypes, Sequelize } from "sequelize"
import { INFO_TYPE_TABLE } from "./infoType.model"
import { PERSON_TABLE } from "./person.model"

export const INFO_TABLE = "tbl_informacion"

export const InfoModel = {
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
export class Info extends Model {
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