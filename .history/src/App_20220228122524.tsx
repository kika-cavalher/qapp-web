import { BrowserRouter, Route } from "react-router-dom";

import { LoginPage } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginPage} />
    </BrowserRouter>
  );
}

export default App;
