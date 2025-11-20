const Usuario = require("../models/Usuario");

module.exports = {
  obtenerTodos() {
    return Usuario.findAll();
  },

  guardarUsuario(data) {
    return Usuario.create(data);
  },

  obtenerPorId(id) {
    return Usuario.findByPk(id);
  },

  eliminarUsuario(id) {
    return Usuario.destroy({ where: { id } });
  },

  async actualizarUsuario(id, data) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return null;

    await usuario.update(data);
    return usuario;
  }
};
