import { verificarCredenciales } from "./authUtils";

const handleSubmit = async (req, res) => {
  const { correoElectronico, contrasena } = req.body;
  try {
    const usuario = await verificarCredenciales(correoElectronico, contrasena);
    if (usuario) {
      // Credenciales válidas, manejar el inicio de sesión
      console.log("Usuario autenticado:", usuario);
      // Aquí podrías devolver una respuesta con el token de autenticación
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    } else {
      // Credenciales inválidas
      console.log("Credenciales inválidas");
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

export default { handleSubmit };
