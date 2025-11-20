const service = require("../services/ventaService");

module.exports = {
  async listar(req, res) {
    res.json(await service.obtenerTodos());
  },

  async crear(req, res) {
    res.json(await service.guardarVenta(req.body));
  },

  async obtener(req, res) {
    const venta = await service.obtenerPorId(req.params.id);
    if (!venta) return res.status(404).json({ error: "Venta no encontrada" });
    res.json(venta);
  }
};
