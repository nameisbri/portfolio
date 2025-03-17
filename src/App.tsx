import "./App.scss";
import { useTheme } from "./context/ThemeContext";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Tech from "./components/sections/Tech";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <nav className="app__navbar">
        <ul className="app__navbar__list">
          <li className="app__navbar__item">Home</li>
          <li className="app__navbar__item">Blog</li>
        </ul>
        <button onClick={toggleTheme} className="app__navbar__theme-toggle">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </nav>
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
