import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./assets/components/LoginPage";
import RegistroPage from "./assets/components/RegistroPage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/registro" component={RegistroPage} />
          {/* Otras rutas */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
