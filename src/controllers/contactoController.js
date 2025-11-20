const contactoService = require("../services/contactoService");

module.exports = {
  async crear(req, res) {
    try {
      const { nombre, correo, comentario } = req.body;
      if (!nombre || !correo || !comentario) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
      }

      const nuevoContacto = await contactoService.crear({ nombre, correo, comentario });
      res.status(201).json(nuevoContacto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al crear contacto" });
    }
  },

  async listar(req, res) {
    try {
      const contactos = await contactoService.listar();
      res.json(contactos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener contactos" });
    }
  },
};
