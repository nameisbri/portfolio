import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../config/emailjs.config";
import "./ContactForm.scss";

const ContactForm = () => {
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
      <h2 className="section__heading">Get in Touch</h2>
      <p className="contact-form__subtitle">
        Interested in working together? Send me a message and I'll get back to you.
      </p>

      <form className="contact-form__form" onSubmit={handleSubmit}>
        <div className="contact-form__field">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell me about what you're looking for, or just say hello."
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
            "Sending..."
          ) : submitStatus === "success" ? (
            "Message Sent!"
          ) : (
            <>
              <span>Send Message</span>
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
            Message sent! I'll get back to you soon.
          </motion.p>
        )}

        {submitStatus === "error" && (
          <motion.p
            className="contact-form__error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Something went wrong. Please try again or email me directly at{" "}
            <a href="mailto:gabriela@gcsb.me">gabriela@gcsb.me</a>
          </motion.p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
