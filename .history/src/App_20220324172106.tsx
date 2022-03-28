import { AuthContextProvider } from './contexts/AuthContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProjectPage  } from "./components/Pages/project/Project";
import { LoginPage } from "./components/Pages/auth/signIn";
import { RegisterPage } from "./components/Pages/auth/signUp";


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<ProjectPage  />} />
          <Route path="auth/sign-in" element={<LoginPage />} />
          <Route path="auth/sign-up" element={<RegisterPage  />} />
        </Routes>
      </AuthContextProvider>      
    </BrowserRouter>
  );
}

export default App;