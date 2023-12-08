import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Auth from "./components/auth/auth"
import {AuthProvider} from './components/context/authContext';
import Home from "./components/home/home"
import Observations from "./components/observations/observations"
import BlogPage from './components/blog/blog';
import AdminPage from './components/admin/admin';
import FAQ from './components/help/faq';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/observations" element={<Observations />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
