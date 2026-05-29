import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  PaperPlaneTilt,
  GithubLogo,
  LinkedinLogo,
  Globe,
} from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../config/emailjs.config";
import { useLang } from "../../context/LanguageContext";
import "./ContactForm.scss";

const ContactForm = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: "N/A",
          phone: "N/A",
          project_type: "Not specified",
          message: formData.message,
          subject: "Portfolio Contact: General",
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form" id="contact">
      <div className="contact-form__inner">
        <aside className="contact-form__aside">
          <p className="contact-form__status">
            <span className="contact-form__status-dot" aria-hidden="true" />
            {t.hero.status}
          </p>

          <h2 className="section__heading">{t.contact.heading}</h2>
          <p className="contact-form__subtitle">{t.contact.subtitle}</p>

          <div className="contact-form__direct">
            <span className="contact-form__direct-label">
              {t.contact.orDirect}
            </span>
            <a
              href="mailto:gabriela@gcsb.me"
              className="contact-form__email"
            >
              gabriela@gcsb.me
            </a>

            <div className="contact-form__meta">
              <span className="contact-form__location">
                <Globe size={16} weight="bold" />
                {t.contact.remote}
              </span>
              <div className="contact-form__socials">
                <a
                  href="https://github.com/nameisbri"
                  className="contact-form__social"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/gabcsb"
                  className="contact-form__social"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo size={20} />
                </a>
              </div>
            </div>
          </div>
        </aside>

        <form className="contact-form__form" onSubmit={handleSubmit}>
        <div className="contact-form__field">
          <label htmlFor="name">{t.contact.nameLabel}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t.contact.namePlaceholder}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">{t.contact.emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t.contact.emailPlaceholder}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">{t.contact.messageLabel}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder={t.contact.messagePlaceholder}
          />
        </div>

        <motion.button
          type="submit"
          className="button button--primary contact-form__submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            t.contact.sending
          ) : submitStatus === "success" ? (
            t.contact.sent
          ) : (
            <>
              <span>{t.contact.send}</span>
              <PaperPlaneTilt weight="bold" size={18} />
            </>
          )}
        </motion.button>

        {submitStatus === "success" && (
          <motion.p
            className="contact-form__success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.contact.success}
          </motion.p>
        )}

        {submitStatus === "error" && (
          <motion.p
            className="contact-form__error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.contact.error}{" "}
            <a href="mailto:gabriela@gcsb.me">gabriela@gcsb.me</a>
          </motion.p>
        )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
