require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const productoRoutes = require("./routes/productoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const ventaRoutes = require("./routes/ventaRoutes");
const detalleVentaRoutes = require("./routes/detalleVentaRoutes");
const contactoRoutes = require("./routes/contactoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/productos", productoRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/ventas", ventaRoutes);
app.use("/api/detalle-venta", detalleVentaRoutes);
app.use("/api/contacto", contactoRoutes);

// Conexión con Neon + Iniciar servidor
sequelize.authenticate()
  .then(() => {
    console.log("Conectado correctamente a NeonDB");

    return sequelize.sync();
  })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => {
    console.error("Error conectando a Neon:", err);
  });
