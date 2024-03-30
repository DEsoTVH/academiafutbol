import React, { useState } from "react";
import axios from "axios";

const RegistroPage = () => {
  const [nombresPadre, setNombresPadre] = useState("");
  const [apellidosPadre, setApellidosPadre] = useState("");
  const [nombresAlumno, setNombresAlumno] = useState("");
  const [apellidosAlumno, setApellidosAlumno] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Registrar el padre
      const responsePadre = await axios.post("/api/padres", {
        nombres: nombresPadre,
        apellidos: apellidosPadre,
        // Otros campos para el padre
      });
      const idPadre = responsePadre.data.id;

      // Registrar el alumno asociándolo al padre registrado
      const responseAlumno = await axios.post("/api/alumnos", {
        nombres: nombresAlumno,
        apellidos: apellidosAlumno,
        id_padre: idPadre,
        // Otros campos para el alumno
      });

      // Registrar el usuario con el correo electrónico y contraseña proporcionados
      const responseUsuario = await axios.post("/api/usuarios", {
        nombre: nombresAlumno, // Puedes usar el nombre del alumno como nombre de usuario
        correo_electronico: correoElectronico,
        contrasena: contrasena,
        tipo_usuario: "estudiante_padre", // Asigna el tipo de usuario apropiado
      });

      // Redirigir a la página de inicio de sesión o mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error al registrar:", error);
      // Manejar errores de registro (por ejemplo, mostrar un mensaje de error al usuario)
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos para el padre */}
        <input
          type="text"
          value={nombresPadre}
          onChange={(e) => setNombresPadre(e.target.value)}
          placeholder="Nombres del padre"
          required
        />
        <input
          type="text"
          value={apellidosPadre}
          onChange={(e) => setApellidosPadre(e.target.value)}
          placeholder="Apellidos del padre"
          required
        />
        {/* Otros campos para el padre */}
        {/* Campos para el alumno */}
        <input
          type="text"
          value={nombresAlumno}
          onChange={(e) => setNombresAlumno(e.target.value)}
          placeholder="Nombres del alumno"
          required
        />
        <input
          type="text"
          value={apellidosAlumno}
          onChange={(e) => setApellidosAlumno(e.target.value)}
          placeholder="Apellidos del alumno"
          required
        />
        {/* Otros campos para el alumno */}
        {/* Campos para el usuario */}
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroPage;
