import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Tech from "./components/sections/Tech";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import Loader from "./components/sections/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <header role="banner">
        <Navbar />
      </header>
      <main id="main-content" className="app__content" role="main">
        <Hero />
        <Experience />
        <Tech />
        <Projects />
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
