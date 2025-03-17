import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, List, X } from "@phosphor-icons/react";
import "./Navbar.scss";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""} ${
        isScrolled ? "navbar--glass" : ""
      }`}
    >
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          Gabriela Barreira
        </a>

        <button className="navbar__mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        <ul
          className={`navbar__menu ${
            isMobileMenuOpen ? "navbar__menu--open" : ""
          }`}
        >
          <li className="navbar__item">
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar__item">
            <a href="#experience">Experience</a>
          </li>
          <li className="navbar__item">
            <a href="#contact">Contact</a>
          </li>
          <li className="navbar__item">
            <button
              onClick={toggleTheme}
              className="navbar__theme-toggle"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
