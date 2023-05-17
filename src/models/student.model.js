import { DataTypes, Model } from "sequelize";

export const STUDENTS_TABLE = "tbl_estudiante"

export const StudentModel = {
  id_estudiante: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  id_persona: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  id_carrera: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  estudiante_cohorte: {
    allowNull: true,
    type: DataTypes.STRING
  },
  estudiante_cantMateria: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  estudiante_periodo: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  id_programaFormacion: {
    allowNull: true,
    type: DataTypes.STRING,
  }
}

export class Student extends Model {

  // static associate(models) {
  //   this.belongsTo(models.Person, { as: "persona" })
  // }

  static config(sequelize) {
    return {
      sequelize,
      tableName: STUDENTS_TABLE,
      modelName: "Students",
      timestamps: false
    }
  }
}