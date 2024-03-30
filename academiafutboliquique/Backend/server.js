import express from "express";
import { verificarCredenciales } from "./authUtils";
import cors from "cors";
import { json } from "body-parser";

const app = express();
const PORT = 3000;

// Habilitar CORS
app.use(cors());

// Middleware para procesar datos JSON en las solicitudes
app.use(json());

// Ruta POST para manejar solicitudes de inicio de sesión
app.post("/login", async (req, res) => {
  const { correoElectronico, contrasena } = req.body;

  try {
    const usuario = await verificarCredenciales(correoElectronico, contrasena);

    if (usuario) {
      // Credenciales válidas
      res.status(200).json({ autenticado: true, usuario });
    } else {
      // Credenciales inválidas
      res
        .status(401)
        .json({ autenticado: false, error: "Credenciales incorrectas" });
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Configurar el servidor para escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
