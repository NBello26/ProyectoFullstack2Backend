const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Usuario = sequelize.define("Usuario", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comuna: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipusuario: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "cliente",
  }
}, {
  tableName: "usuarios",
  timestamps: true,
});

module.exports = Usuario;
