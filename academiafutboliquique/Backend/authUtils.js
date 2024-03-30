const pool = require("./dbConfig");

const verificarCredenciales = async (correoElectronico, contrasena) => {
  try {
    const query =
      "SELECT * FROM Usuarios WHERE correo_electronico = $1 AND contrasena = $2 AND (tipo_usuario = 'admin' OR tipo_usuario = 'alumno_padre')";
    const values = [correoElectronico, contrasena];
    const result = await pool.query(query, values);
    return result.rows[0]; // Esto podría ser undefined si no se encuentra ningún usuario
  } catch (error) {
    console.error("Error al verificar las credenciales:", error);
    throw error;
  }
};

module.exports = { verificarCredenciales };
