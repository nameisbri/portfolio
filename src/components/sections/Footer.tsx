import "./Footer.scss";
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  FileArrowDown,
  MapPin,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__contact-wrapper">
        <div className="footer__contact">
          <h2 className="footer__contact-title">Get In Touch</h2>
          <p className="footer__contact-text">
            I'm currently open to new opportunities and would love to discuss
            how I can contribute to your team.
          </p>

          <ul className="footer__contact-info">
            <li>
              <EnvelopeSimple size={18} />
              <a href="mailto:gabriela@gcsb.me">gabriela@gcsb.me</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>Ontario, Canada & Remote</span>
            </li>
          </ul>

          <div className="footer__cta">
            <a
              href="/Gabriela_Barreira_Resume.pdf"
              download
              className="button button--primary footer__resume-btn"
            >
              <FileArrowDown weight="bold" size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__content">
        <div className="footer__info">
          <h3 className="footer__name">Gabriela Barreira</h3>
          <p className="footer__tagline">
            Software Developer building user-centric solutions
          </p>
        </div>

        <div className="footer__socials">
          <a
            href="https://github.com/nameisbri"
            className="footer__social-link"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={24} weight="fill" />
          </a>
          <a
            href="https://linkedin.com/in/gabcsb"
            className="footer__social-link"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={24} weight="fill" />
          </a>
          <a
            href="mailto:gcdbarreira@gmail.com"
            className="footer__social-link"
            aria-label="Email"
          >
            <EnvelopeSimple size={24} weight="fill" />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Gabriela Barreira. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
