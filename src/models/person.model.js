const { Model, DataTypes, Sequelize } = require("sequelize");

const PERSON_TABLE = "tbl_persona"

const PersonSchema = {
  id_persona: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  persona_tipoIdentificacion:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  persona_nacionalidad:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  persona_cedula:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  persona_nombres:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  persona_apellidos:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  persona_correo:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  persona_genero:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  persona_fechaNacimiento:{
    allowNull: false,
    type: DataTypes.DATE,
  },
  persona_fechaCreacion:{
    allowNull: false,
    type: Sequelize.NOW,
  },
}

class Person extends Model {
  static associate(models){
    // this.hasMany(models.Info, {
    //   as: "info",
    //   foreignKey: "informacion_idPublicador"
    // })
    // this.hasMany(models.InfoConfirmed, {
    //   as: "infoConfirmed",
    //   foreignKey: "id_persona"
    // })
  }
  
  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSON_TABLE,
      modelName: "Person",
      timestamps: false,
    }
  }
}

module.exports = { Person, PersonSchema, PERSON_TABLE }