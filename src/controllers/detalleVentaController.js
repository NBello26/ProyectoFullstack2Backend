const service = require("../services/detalleVentaService");

module.exports = {
  async listar(req, res) {
    res.json(await service.obtenerTodos());
  },

  async obtener(req, res) {
    const data = await service.obtenerPorId(req.params.id);
    if (!data) return res.status(404).json({ error: "Detalle no encontrado" });
    res.json(data);
  },

  async crear(req, res) {
    res.json(await service.crear(req.body));
  },

  async actualizar(req, res) {
    const data = await service.actualizar(req.params.id, req.body);
    if (!data) return res.status(404).json({ error: "Detalle no encontrado" });
    res.json(data);
  },

  async eliminar(req, res) {
    await service.eliminar(req.params.id);
    res.json({ message: "Detalle eliminado" });
  }
};
