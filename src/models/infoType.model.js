import { Model, Sequelize, DataTypes } from "sequelize"

export const INFO_TYPE_TABLE = "tbl_informacionTipo"

export const InfoTypeModel = {
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

export class InfoType extends Model {
  static associate(models) {
    // this.hasMany(models.Info, { 
    //   as: "info",
    //   foreignKey: "id_informacionTipo",
    // })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INFO_TYPE_TABLE,
      modelName: "InfoType",
      timestamps: false,
    }
  }
}