const Venta = require("../models/Venta");

module.exports = {
  obtenerTodos() {
    return Venta.findAll();
  },

  guardarVenta(data) {
    return Venta.create(data);
  },

  obtenerPorId(id_venta) {
    return Venta.findByPk(id_venta);
  }
};
