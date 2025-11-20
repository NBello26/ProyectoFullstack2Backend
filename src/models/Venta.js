const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Venta = sequelize.define("Venta", {
  id_venta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre_cliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  calle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departamento: {
    type: DataTypes.STRING,
    allowNull: true
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comuna: {
    type: DataTypes.STRING,
    allowNull: false
  },
  indicaciones: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: "ventas"
});

module.exports = Venta;
