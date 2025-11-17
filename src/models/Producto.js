const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Producto = sequelize.define("Producto", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoPrecio: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "normal",
  }
}, {
  tableName: "productos",
  timestamps: true,
});

module.exports = Producto;
