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
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <Navbar />
      <main className="app__content">
        <Hero />
        <Experience />
        <Tech />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
