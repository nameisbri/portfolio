import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../config/emailjs.config";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "N/A",
          phone: formData.phone || "N/A",
          project_type: formData.projectType || "Not specified",
          message: formData.message,
          subject: `Portfolio Contact: ${formData.projectType || "General"}`,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Success - reset form
      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

      // Reset status after 5 seconds
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
      <div className="contact-form__container">
        <h2 className="section__heading">Get in Touch</h2>
        <p className="contact-form__subtitle">
          Interested in working together? Send me a message and I'll get back to you within 24 hours.
        </p>

        <form className="contact-form__form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name (optional)"
              />
            </div>
          </div>

          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567 (optional)"
              />
            </div>
          </div>

          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="projectType">What are you looking for?</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="">Select a type (optional)</option>
                <option value="Full-time Role">Full-time Role</option>
                <option value="Contract Work">Contract Work</option>
                <option value="Freelance Project">Freelance Project</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="contact-form__field contact-form__field--full">
            <label htmlFor="message">Tell me about your project *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell me a bit about what you're looking for, or just say hello."
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
              ✓ Message sent! I'll get back to you within 24 hours.
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
      </div>
    </section>
  );
};

export default ContactForm;
