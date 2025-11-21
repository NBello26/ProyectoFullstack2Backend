const service = require("../services/ventaService");

module.exports = {
  async listar(req, res) {
    try {
      const ventas = await service.obtenerTodos();
      res.json(ventas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async crear(req, res) {
    try {
      const venta = await service.guardarVenta(req.body);
      res.json(venta);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obtener(req, res) {
    try {
      const venta = await service.obtenerPorId(req.params.id);
      if (!venta) return res.status(404).json({ error: "Venta no encontrada" });
      res.json(venta);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
