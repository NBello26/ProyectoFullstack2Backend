const express = require("express");
const router = express.Router();
const contactoController = require("../controllers/contactoController");

router.get("/", contactoController.listar);   // listar todos los contactos
router.post("/", contactoController.crear);   // crear nuevo contacto

module.exports = router;
