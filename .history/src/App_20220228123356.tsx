import { BrowserRouter, Route } from "react-router-dom";

import { LoginPage } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<LoginPage/>} />
    </BrowserRouter>
  );
}

export default App;
