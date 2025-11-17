const service = require("../services/usuarioService");

module.exports = {
  async listar(req, res) {
    res.json(await service.obtenerTodos());
  },

  async crear(req, res) {
    try {
      const nuevo = await service.guardarUsuario(req.body);
      res.json(nuevo);
    } catch (err) {
      res.status(400).json({ error: "Error al crear usuario" });
    }
  },

  async obtener(req, res) {
    const usuario = await service.obtenerPorId(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
  },

  async actualizar(req, res) {
    const usuario = await service.actualizarUsuario(req.params.id, req.body);
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(usuario);
  },

  async eliminar(req, res) {
    await service.eliminarUsuario(req.params.id);
    res.json({ message: "Usuario eliminado" });
  }
};
