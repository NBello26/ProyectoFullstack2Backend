const DetalleVenta = require("../models/DetalleVenta");

module.exports = {
  obtenerTodos() {
    return DetalleVenta.findAll();
  },

  obtenerPorId(id) {
    return DetalleVenta.findByPk(id);
  },

  obtenerPorVenta(idVenta) {
    return DetalleVenta.findAll({
      where: { id_venta: idVenta }
    });
  },

  crear(detalle) {
    return DetalleVenta.create(detalle);
  },

  actualizar(id, data) {
    return DetalleVenta.update(data, {
      where: { id_detalle_venta: id }
    });
  },

  eliminar(id) {
    return DetalleVenta.destroy({
      where: { id_detalle_venta: id }
    });
  }
};
