import { AuthContextProvider } from './contexts/AuthContext'
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage  />} />
          </Routes>
        </Switch>
      </AuthContextProvider>      
    </BrowserRouter>
  );
}

export default App;
