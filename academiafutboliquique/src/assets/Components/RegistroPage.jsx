import { useState } from "react";
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
      const responsePadre = await axios.post("/api/padres", {
        nombres: nombresPadre,
        apellidos: apellidosPadre,
      });
      const idPadre = responsePadre.data.id;

      const responseAlumno = await axios.post("/api/alumnos", {
        nombres: nombresAlumno,
        apellidos: apellidosAlumno,
        id_padre: idPadre,
      });

      const responseUsuario = await axios.post("/api/usuarios", {
        nombre: nombresAlumno,
        correo_electronico: correoElectronico,
        contrasena: contrasena,
        tipo_usuario: "estudiante_padre",
      });
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
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
