const service = require("../services/detalleVentaService");

module.exports = {
  async listar(req, res) {
    try {
      const detalles = await service.obtenerTodos();
      res.json(detalles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obtener(req, res) {
    try {
      const detalle = await service.obtenerPorId(req.params.id);
      if (!detalle) return res.status(404).json({ error: "Detalle no encontrado" });
      res.json(detalle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async crear(req, res) {
    try {
      const detalle = await service.crear(req.body);
      res.json(detalle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async actualizar(req, res) {
    try {
      const resultado = await service.actualizar(req.params.id, req.body);
      if (!resultado) return res.status(404).json({ error: "Detalle no encontrado" });
      res.json({ message: "Detalle actualizado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async eliminar(req, res) {
    try {
      await service.eliminar(req.params.id);
      res.json({ message: "Detalle eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async listarPorVenta(req, res) {
    try {
      const detalles = await service.obtenerPorVenta(req.params.idVenta);
      res.json(detalles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
