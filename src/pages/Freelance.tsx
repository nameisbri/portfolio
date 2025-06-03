import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  CalendarCheck,
  ChatCircleText,
  Clock,
  Star,
} from "@phosphor-icons/react";
import "./Freelance.scss";

const Freelance = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectDescription: formData.get("projectDescription"),
      timeline: formData.get("timeline"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    console.log("Form submission:", data);
    alert("Thanks! I'll be in touch shortly.");
    e.currentTarget.reset();
  };

  const services = [
    {
      id: "custom-development",
      title: "Custom Website Development",
      description: "React, Node, CMS",
    },
    {
      id: "responsive-design",
      title: "Responsive Design & Accessibility",
      description: "Works beautifully on all devices",
    },
    {
      id: "content-seo",
      title: "Content Architecture & SEO Basics",
      description: "Clear messaging that gets found",
    },
    {
      id: "ux-consulting",
      title: "UX Consulting for Health & Wellness Tech",
      description: "Specialized expertise in health tech",
    },
    {
      id: "ongoing-support",
      title: "Ongoing Support & Site Maintenance",
      description: "Keep your site running smoothly",
    },
  ];

  const differentiators = [
    "Based locally in Hamilton with a remote-first mindset",
    "Detail-oriented, deadline-respecting, and easy to work with",
    "Clear communication and transparent pricing",
    "I care about the impact your tech has on your users—and your business",
  ];

  return (
    <motion.main
      className="freelance app__content"
      id="main-content"
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="freelance__hero">
        <motion.div
          className="freelance__hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Need a reliable freelance developer who just gets it?</h1>
          <p>Let's build something meaningful—together.</p>
          <p className="freelance__hero-subtext">
            I'm Gabriela, a Web Developer and Content Strategist based in
            Hamilton, Ontario. I help small businesses, creatives, and startups
            bring their digital ideas to life—with clean code, clear messaging,
            and a collaborative process.
          </p>
          <a href="#contact" className="freelance__cta-button">
            Get a Free Estimate
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="freelance__services">
        <h2 className="section__heading">How I Can Help</h2>
        <p className="freelance__services-intro">
          Whether you're launching a new website, modernizing your tech stack,
          or clarifying your brand story, I bring a thoughtful mix of technical
          skill and content strategy to the table.
        </p>
        <motion.div
          className="freelance__services-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="freelance__service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>✦ {service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <p className="freelance__services-cta">
          Need something specific? Let's chat—I can tailor a solution that fits.
        </p>
      </section>

      {/* Why Work With Me Section */}
      <section className="freelance__differentiators">
        <h2 className="section__heading">What Makes Me Different</h2>
        <p className="freelance__differentiators-intro">
          I combine the precision of a developer with the instincts of a content
          strategist. That means you'll get a site that works beautifully{" "}
          <em>and</em> communicates clearly.
        </p>
        <motion.div
          className="freelance__differentiators-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="freelance__differentiator-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle size={18} />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
        <p className="freelance__differentiators-cta">
          Let's make your next project smoother, smarter, and more human.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="freelance__contact">
        <h2 className="section__heading">Let's Talk About Your Project</h2>
        <div className="freelance__contact-content">
          <div className="freelance__contact-info">
            <p>
              Use the quick form below to tell me a bit about what you need.
              I'll respond within 1 business day with a ballpark estimate or
              follow-up questions.
            </p>
            <div className="freelance__contact-details">
              <a
                href="mailto:hello@gabrieladsb.dev"
                className="freelance__email-link"
              >
                📧 hello@gabrieladsb.dev
              </a>
              <p>
                📍 Hamilton, ON — serving clients in Toronto and remotely across
                Canada
              </p>
              <div className="freelance__social-links">
                <a
                  href="https://www.linkedin.com/in/gabriela-barreira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="freelance__social-link"
                >
                  🔗 LinkedIn
                </a>
                <a
                  href="https://github.com/nameisbri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="freelance__social-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="freelance__contact-form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectDescription">
                  What do you need help with?
                </label>
                <input
                  type="text"
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Brief description"
                  required
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  aria-required="true"
                >
                  <option value="">Select timeline</option>
                  <option value="soon">Soon</option>
                  <option value="1-2-months">1–2 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget</label>
                <select id="budget" name="budget" required aria-required="true">
                  <option value="">Select budget range</option>
                  <option value="under-2k">Under $2K</option>
                  <option value="2k-5k">$2K–5K</option>
                  <option value="5k-plus">$5K+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='e.g. "I need help modernizing my portfolio site" or "I run a small clinic and need booking integrations."'
                ></textarea>
              </div>
              <button type="submit" className="freelance__submit-button">
                Send Request →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bonus CTA Section */}
      <section className="freelance__bonus-cta">
        <motion.div
          className="freelance__bonus-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Just need some advice first?</h3>
          <p>
            I'm happy to offer a <strong>free 20-minute consultation</strong>{" "}
            for local clients or community initiatives. No pressure, just a
            conversation.
          </p>
          <a
            href="#contact"
            className="freelance__cta-button freelance__cta-button--secondary"
          >
            Schedule a quick call →
          </a>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Freelance;
