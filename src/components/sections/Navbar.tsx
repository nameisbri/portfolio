import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, List, X } from "@phosphor-icons/react";
import "./Navbar.scss";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 150; // Offset for navbar and padding
      const sections = [
        { id: "main-content", name: "" },
        { id: "projects", name: "projects" },
        { id: "services", name: "services" },
        { id: "skills", name: "skills" },
        { id: "experience", name: "experience" },
        { id: "contact", name: "contact" },
      ];

      // Check from bottom to top to find the current section
      let currentSection = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(sections[i].id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentSection = sections[i].name;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for sticky navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    
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
              className={activeSection === "" ? "active" : ""}
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Home
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Projects
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a
              href="#services"
              className={activeSection === "services" ? "active" : ""}
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Services
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Skills
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Experience
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={handleNavClick}
              tabIndex={isMobileMenuOpen || !isMobileMenuOpen ? 0 : -1}
            >
              Contact
            </a>
          </li>
          <li className="navbar__item" role="menuitem">
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
