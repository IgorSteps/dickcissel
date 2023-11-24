import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Auth from "./components/auth/auth"
import Home from "./components/home/home"
import Observations from "./components/observations/observations"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/observations" element={<Observations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
