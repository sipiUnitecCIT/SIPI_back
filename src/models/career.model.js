const { DataTypes, Model } = require("sequelize");

const CAREER_TABLE = "tbl_carrera";

const CareerModel = {
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

class Career extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CAREER_TABLE,
      modelName: "Carrer",
      timestamps: false,
    }
  }
}

module.exports = { Career, CareerModel, CAREER_TABLE }