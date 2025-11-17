const service = require("../services/productoService");

module.exports = {
  async listar(req, res) {
    res.json(await service.obtenerTodos());
  },

  async crear(req, res) {
    try {
      const nuevo = await service.guardarProducto(req.body);
      res.json(nuevo);
    } catch (err) {
      res.status(400).json({ error: "Error al crear producto" });
    }
  },

  async obtener(req, res) {
    const prod = await service.obtenerPorId(req.params.id);
    if (!prod) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(prod);
  },

  async eliminar(req, res) {
    await service.eliminarProducto(req.params.id);
    res.json({ message: "Producto eliminado" });
  },

  async actualizar(req, res) {
    const prod = await service.actualizarProducto(req.params.id, req.body);
    if (!prod) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(prod);
  }
};
