import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar solicitud POST al backend para iniciar sesión
      const response = await axios.post("/api/login", {
        correo_electronico: correoElectronico,
        contrasena: contrasena,
      });

      // Manejar la respuesta del backend según corresponda (por ejemplo, redirigir a la página principal)
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      // Manejar errores de inicio de sesión (por ejemplo, mostrar un mensaje de error al usuario)
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;
