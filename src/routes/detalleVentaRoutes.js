const express = require("express");
const router = express.Router();
const controller = require("../controllers/detalleVentaController");

router.get("/", controller.listar);
router.get("/:id", controller.obtener);
router.post("/", controller.crear);
router.put("/:id", controller.actualizar);
router.delete("/:id", controller.eliminar);

// Endpoint extra: obtener todos los detalles de una venta específica
router.get("/venta/:idVenta", controller.listarPorVenta);

module.exports = router;
