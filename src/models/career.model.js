import { DataTypes, Model } from "sequelize"

export const CAREER_TABLE = "tbl_carrera";

export const CareerModel = {
  id_carrera: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  carrera_nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  carrera_descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  carrera_siglas: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}

export class Career extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CAREER_TABLE,
      modelName: "Carrer",
      timestamps: false,
    }
  }
}