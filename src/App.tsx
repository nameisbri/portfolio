import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import Loader from "./components/sections/Loader";
import Home from "./pages/Home";
import Freelance from "./pages/Freelance";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

        <header role="banner">
          <Navbar />
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freelance" element={<Freelance />} />
        </Routes>
        
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
