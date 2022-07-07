import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ProjectPage } from "./components/Pages/project";
import { LoginPage } from "./components/Pages/auth/signIn";
import { RegisterPage } from "./components/Pages/auth/signUp";
import { ProjectsContextProvider } from "./contexts/ProjectsContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ProjectsContextProvider>
          <Routes>
            <Route path="/auth/sign-in" element={<LoginPage />} />
            <Route path="/auth/sign-up" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </ProjectsContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
