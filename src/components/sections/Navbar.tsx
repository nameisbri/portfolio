import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { useLang } from "../../context/LanguageContext";
import "./Navbar.scss";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
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

        <div className="navbar__right">
          <ul
            className={`navbar__menu ${isMobileMenuOpen ? "navbar__menu--open" : ""}`}
            role="menu"
          >
            <li className="navbar__item" role="menuitem">
              <a href="#projects" onClick={handleNavClick}>{t.nav.projects}</a>
            </li>
            <li className="navbar__item" role="menuitem">
              <a href="#skills" onClick={handleNavClick}>{t.nav.about}</a>
            </li>
            <li className="navbar__item" role="menuitem">
              <a href="#contact" onClick={handleNavClick}>{t.nav.contact}</a>
            </li>
          </ul>

          <div
            className="navbar__lang"
            role="group"
            aria-label={t.nav.english + " / " + t.nav.portuguese}
          >
            <button
              type="button"
              className={`navbar__lang-btn ${lang === "en" ? "navbar__lang-btn--active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label={t.nav.english}
            >
              EN
            </button>
            <span className="navbar__lang-sep" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className={`navbar__lang-btn ${lang === "pt" ? "navbar__lang-btn--active" : ""}`}
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
              aria-label={t.nav.portuguese}
            >
              PT
            </button>
          </div>

          <button
            className="navbar__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
