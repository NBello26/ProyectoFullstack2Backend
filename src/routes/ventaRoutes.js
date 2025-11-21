// routes/ventaRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/ventaController");

router.get("/", controller.listar);
router.post("/", controller.crear);
router.get("/:id", controller.obtener);

module.exports = router;

