import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="mailto:gabriela@gcsb.me" className="footer__link">
            gabriela@gcsb.me
          </a>

          <div className="footer__socials">
            <a
              href="https://github.com/nameisbri"
              className="footer__social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={20} />
            </a>
            <a
              href="https://linkedin.com/in/gabcsb"
              className="footer__social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={20} />
            </a>
            <a
              href="mailto:gabriela@gcsb.me"
              className="footer__social-link"
              aria-label="Email"
            >
              <EnvelopeSimple size={20} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} Gabriela Barreira</span>
          <span className="footer__divider">&middot;</span>
          <span>Hamilton, Ontario</span>
          <span className="footer__divider">&middot;</span>
          <a
            href="/Resume_Gabriela_Barreira.pdf"
            download="Resume_Gabriela_Barreira.pdf"
            target="_blank"
            className="footer__resume-link"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
