const {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
} = require("../data/users");

module.exports = {
  obtenerTodos() {
    return obtenerUsuarios();
  },

  guardarUsuario(data) {
    return crearUsuario(data);
  },

  obtenerPorId(id) {
    return obtenerUsuarioPorId(Number(id));
  },

  async actualizarUsuario(id, data) {
    const usuario = obtenerUsuarioPorId(Number(id));
    if (!usuario) return null;

    return actualizarUsuario(Number(id), data);
  },

  eliminarUsuario(id) {
    return eliminarUsuario(Number(id));
  }
};
