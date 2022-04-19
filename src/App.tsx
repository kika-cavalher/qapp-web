import { AuthContextProvider } from "./contexts/AuthContext";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // useLocation,export 'getAuth' (imported as 'getAuth') was not found in 'firebase/auth' (module has no exports)
} from "react-router-dom";

import { ProjectPage } from "./components/Pages/project";
import { LoginPage } from "./components/Pages/auth/signIn";
import { RegisterPage } from "./components/Pages/auth/signUp";

// function RequireAuth({ children }: { children: JSX.Element }) {
//   const userToken = localStorage.getItem("@qapp:user-token");
//   const location = useLocation();

//   if (!userToken) {
//     return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
//   } else {
//     return children;
//   }
// }

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/auth/sign-in" element={<LoginPage />} />
          <Route path="/auth/sign-up" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/projects" element={<ProjectPage />} />

          {/* <Route
            path="/projects"
            element={
              <RequireAuth>
                <ProjectPage />
              </RequireAuth>
            }
          /> */}
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
