import "./App.scss";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Tech from "./components/sections/Tech";
import Experience from "./components/sections/Experience";
import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header role="banner">
        <Navbar />
      </header>
      <main id="main-content" className="app__content" role="main">
        <Hero />
        <Projects />
        <Tech />
        <Experience />
        <ContactForm />
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
