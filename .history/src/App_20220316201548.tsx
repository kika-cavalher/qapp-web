import { AuthContextProvider } from './contexts/AuthContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProjectPage  } from "./pages/Project";
import { LoginPage } from "./pages/auth/SignIn";
import { RegisterPage } from "./pages/auth/SignUp";


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

{/* <Route path="/project" element={<ProjectPage  />} /> */}