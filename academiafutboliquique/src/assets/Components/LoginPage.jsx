import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar solicitud POST al backend para iniciar sesión
      const response = await axios.post("http://localhost:3000/login", {
        correo_electronico: correoElectronico,
        contrasena: contrasena,
      });

      // Verificar si la respuesta del backend indica que la autenticación fue exitosa
      if (response.data.autenticado) {
        // Manejar la redirección a la página principal u otra página autorizada
        console.log("Usuario autenticado:", response.data.usuario);
      } else {
        // Si la autenticación falla, mostrar un mensaje de error
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      // Manejar errores de inicio de sesión (por ejemplo, mostrar un mensaje de error al usuario)
      setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
