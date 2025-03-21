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

  const handleNavClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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

        <button
          className="navbar__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        <ul
          className={`navbar__menu ${
            isMobileMenuOpen ? "navbar__menu--open" : ""
          }`}
        >
          <li className="navbar__item">
            <a href="#" className="active" onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="#projects" onClick={handleNavClick}>
              Projects
            </a>
          </li>
          <li className="navbar__item">
            <a href="#skills" onClick={handleNavClick}>
              Skills
            </a>
          </li>
          <li className="navbar__item">
            <a href="#experience" onClick={handleNavClick}>
              Experience
            </a>
          </li>
          <li className="navbar__item">
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
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
              <span className="navbar__theme-label">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
