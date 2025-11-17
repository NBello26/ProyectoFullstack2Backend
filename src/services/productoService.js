const Producto = require("../models/Producto");

module.exports = {
  obtenerTodos() {
    return Producto.findAll();
  },

  guardarProducto(data) {
    return Producto.create(data);
  },

  obtenerPorId(id) {
    return Producto.findByPk(id);
  },

  eliminarProducto(id) {
    return Producto.destroy({ where: { id } });
  },

  async actualizarProducto(id, data) {
    const producto = await Producto.findByPk(id);
    if (!producto) return null;

    await producto.update(data);
    return producto;
  }
};
