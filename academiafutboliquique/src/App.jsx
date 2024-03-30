import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./assets/components/LoginPage";
import RegistroPage from "./assets/components/RegistroPage";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirige desde la ruta raíz hacia la página de inicio de sesión */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
};

export default App;
