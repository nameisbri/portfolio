import { ArrowUp } from "@phosphor-icons/react";
import { useLang } from "../../context/LanguageContext";
import "./Footer.scss";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer__content">
        <span className="footer__bottom">
          &copy; {new Date().getFullYear()} Gabriela Barreira
        </span>

        <a href="#" className="footer__top">
          {t.footer.backToTop}
          <ArrowUp size={14} weight="bold" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
