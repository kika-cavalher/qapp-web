import { BrowserRouter, Route } from "react-router-dom";

import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </BrowserRouter>
  );
}

export default App;
