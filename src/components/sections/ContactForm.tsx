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
    primaryGoal: "",
    budget: "",
    launchDate: "",
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
      // Format launch date for display
      const formattedLaunchDate = formData.launchDate
        ? new Date(formData.launchDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Not specified";

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "N/A",
          phone: formData.phone || "N/A",
          project_type: formData.projectType,
          primary_goal: formData.primaryGoal,
          budget: formData.budget,
          launch_date: formattedLaunchDate,
          message: formData.message,
          subject: `Strategy Call Request: ${formData.projectType}`,
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
        primaryGoal: "",
        budget: "",
        launchDate: "",
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
        <h2 className="section__heading">Let's Build Your Roadmap</h2>
        <p className="contact-form__subtitle">
          Fill out the form below to request a strategy call. I'll review your project details and get back to you within 24 hours.
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
              <label htmlFor="projectType">What are we building? *</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select a project type</option>
                <option value="Mobile App (iOS/Android)">Mobile App (iOS/Android)</option>
                <option value="Website">Website</option>
                <option value="Web Application">Web Application</option>
                <option value="Product Design">Product Design</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="contact-form__field">
              <label htmlFor="primaryGoal">What is your primary goal? *</label>
              <select
                id="primaryGoal"
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleChange}
                required
              >
                <option value="">Select a goal</option>
                <option value="Launching a New Product">Launching a New Product</option>
                <option value="Growing an Existing Product">Growing an Existing Product</option>
                <option value="Redesigning for Better Results">Redesigning for Better Results</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="budget">Estimated Project Budget *</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select a budget range</option>
                <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                <option value="$25,000+">$25,000+</option>
                <option value="I'm not sure, let's discuss">I'm not sure, let's discuss</option>
              </select>
            </div>
            <div className="contact-form__field">
              <label htmlFor="launchDate">Desired Launch Date</label>
              <input
                type="date"
                id="launchDate"
                name="launchDate"
                value={formData.launchDate}
                onChange={handleChange}
              />
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
              placeholder="What are you looking to build? What challenges are you facing? Any specific requirements or questions?"
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
                <span>Request My Strategy Call</span>
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
              ✓ Message sent successfully! I'll review your project details and get back to you within 24 hours.
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
