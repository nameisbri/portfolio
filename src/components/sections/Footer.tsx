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
          <div className="footer__image-container">
            <img
              src="/headshot.jpg"
              alt="Gabriela Barreira"
              className="footer__image"
            />
          </div>
          <h2 className="footer__contact-title">Let's Work Together</h2>
          <p className="footer__contact-text">
            I'm a Product Designer & Developer specializing in React Native iOS apps, modern web applications, product design, and UX/UI. I leverage AI-assisted development workflows (Cursor, Claude, agent systems) to deliver efficient, high-quality solutions throughout the entire product lifecycle. Available for freelance projects, product design work, and development opportunities—let's bring your vision to life.
          </p>

          <ul className="footer__contact-info">
            <li>
              <EnvelopeSimple size={18} />
              <a href="mailto:gabriela@gcsb.me">gabriela@gcsb.me</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>Ontario, Canada & Open to Remote</span>
            </li>
          </ul>

          <div className="footer__cta">
            <a
              href="/Resume_Gabriela_Barreira.pdf"
              download="Resume_Gabriela_Barreira.pdf"
              target="_blank"
              className="button button--primary footer__resume-btn"
            >
              <FileArrowDown weight="bold" size={18} />
              <span>Download Resume</span>
            </a>
            <a
              href="mailto:gabriela@gcsb.me?subject=Inquiry%20for%20Gabriela"
              className="button button--secondary footer__contact-btn"
            >
              <EnvelopeSimple weight="bold" size={18} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__content">
        <div className="footer__info">
          <h3 className="footer__name">Gabriela Barreira</h3>
          <p className="footer__tagline">
            Product Designer & Developer
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
            href="mailto:gabriela@gcsb.me"
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
