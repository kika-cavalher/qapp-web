import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import { ProjectPage } from "./components/Pages/project";
import { LoginPage } from "./components/Pages/auth/signIn";
import { RegisterPage } from "./components/Pages/auth/signUp";
import { ProjectsContextProvider } from "./contexts/ProjectsContext";

function App() {
  return (
    <BrowserRouter>
      <ProjectsContextProvider>
        <Routes>
          <Route path="/auth/sign-in" element={<LoginPage />} />
          <Route path="/auth/sign-up" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </ProjectsContextProvider>
    </BrowserRouter>
  );
}

export default App;
