const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DetalleVenta = sequelize.define("DetalleVenta", {
  id_detalle_venta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_venta: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: "detalle_venta",
  timestamps: false
});

module.exports = DetalleVenta;
