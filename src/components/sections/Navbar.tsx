import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="app__navbar">
      <ul className="app__navbar__list">
        <li className="app__navbar__item">Home</li>
        <li className="app__navbar__item">Blog</li>
      </ul>
      <button onClick={toggleTheme} className="app__navbar__theme-toggle">
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
