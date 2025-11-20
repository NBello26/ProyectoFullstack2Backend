const Contacto = require("../models/Contacto");

module.exports = {
  async crear(contactoData) {
    try {
      const contacto = await Contacto.create(contactoData);
      return contacto;
    } catch (error) {
      throw error;
    }
  },

  async listar() {
    try {
      const contactos = await Contacto.findAll({ order: [["createdAt", "DESC"]] });
      return contactos;
    } catch (error) {
      throw error;
    }
  },
};
