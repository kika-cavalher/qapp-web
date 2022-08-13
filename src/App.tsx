import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ProjectPage } from "./Pages/project";
import { LoginPage } from "./Pages/auth/signIn";
import { RegisterPage } from "./Pages/auth/signUp";

import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
      {/* <ProjectsContextProvider> */}
        <Routes>
          <Route path="/auth/sign-in" element={<LoginPage />} />
          <Route path="/auth/sign-up" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      {/* </ProjectsContextProvider> */}
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
