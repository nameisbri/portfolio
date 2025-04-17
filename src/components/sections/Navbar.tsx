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

  // Keyboard support for mobile menu
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      onKeyDown={handleKeyDown}
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
          role="menu"
        >
          <li className="navbar__item" role="menuitem">
            <a
              href="#"
              className="active"
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Home
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a
              href="#projects"
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Projects
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a
              href="#skills"
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Skills
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a
              href="#experience"
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Experience
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a
              href="#contact"
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Contact
            </a>
          </li>
          <li className="navbar__item" role="button">
            <button
              onClick={toggleTheme}
              className="navbar__theme-toggle"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
              title={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? (
                <Moon size={20} aria-hidden="true" />
              ) : (
                <Sun size={20} aria-hidden="true" />
              )}
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
