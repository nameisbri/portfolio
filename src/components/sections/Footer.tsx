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
            I'm looking to join a team where genuine collaboration and
            purpose-driven development are valued. My background in marketing
            combined with my software engineering skills allows me to approach
            problems holistically—considering both technical implementation and
            human impact. I'm excited about opportunities (remote or hybrid)
            where I can contribute to meaningful projects that make a difference
            in people's lives.
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
