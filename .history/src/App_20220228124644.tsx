import { BrowserRouter, Routes } from "react-router-dom";

import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/" element={<LoginPage />} />
      <Routes path="/register" element={<RegisterPage  />} />
    </BrowserRouter>
  );
}

export default App;
