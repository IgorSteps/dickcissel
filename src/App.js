import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/auth/auth"
import { AuthProvider } from './components/context/authContext';
import Home from "./components/home/home"
import Observations from "./components/observations/observations"
import BlogPage from './components/blog/blog';
import Education from './components/education/education';
import AdminPage from './components/admin/admin';
import FAQ from './components/help/faq';
import ContactUs from './components/help/contact';
import HowToUse from './components/help/howtouse';
import SearchPage from './components/search/birdSearch';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/observations" element={<Observations />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/find-a-bird" element={<SearchPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;

