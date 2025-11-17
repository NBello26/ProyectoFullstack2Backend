require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const productoRoutes = require("./routes/productoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/productos", productoRoutes);
app.use("/api/usuarios", usuarioRoutes);

// Conexión con Neon + Iniciar servidor
sequelize.authenticate()
  .then(() => {
    console.log("Conectado correctamente a NeonDB");

    return sequelize.sync();
  })
  .then(() => {
    app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
  })
  .catch(err => {
    console.error("Error conectando a Neon:", err);
  });
