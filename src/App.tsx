import "./App.scss";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Tech from "./components/sections/Tech";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";

function App() {
  return (
    <div className="app">
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
