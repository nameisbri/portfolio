import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import "./Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.getElementById(href.substring(1));

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

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
        <a href="#" className="navbar__logo" onClick={handleNavClick}>
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
          className={`navbar__menu ${isMobileMenuOpen ? "navbar__menu--open" : ""}`}
          role="menu"
        >
          <li className="navbar__item" role="menuitem">
            <a href="#projects" onClick={handleNavClick}>Projects</a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a href="#skills" onClick={handleNavClick}>About</a>
          </li>
          <li className="navbar__item" role="menuitem">
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
