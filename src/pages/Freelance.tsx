import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, CalendarCheck, ChatCircleText, Clock } from "@phosphor-icons/react";
import "./Freelance.scss";

const Freelance = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    // For now, log the form data and show a success message
    console.log('Form submission:', data);
    alert('Thanks for reaching out! I\'ll get back to you within 24 hours.');
    e.currentTarget.reset();
  };
  const services = [
    {
      id: "business-websites",
      title: "Small Business Websites",
      description: "Professional, responsive websites tailored for local businesses. Designed to attract customers and showcase your services.",
      features: [
        "Mobile-friendly design",
        "Search engine optimization",
        "Contact forms & maps integration",
        "Social media integration",
        "Content management system"
      ]
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description: "Custom online stores that make selling your products simple and secure. From inventory management to payment processing.",
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Inventory tracking",
        "Order management",
        "Customer accounts"
      ]
    },
    {
      id: "integrations",
      title: "Custom Integrations",
      description: "Connect your website with the tools your business already uses. Automate workflows and save time with custom integrations.",
      features: [
        "Third-party API integration",
        "Automation workflows",
        "Data synchronization",
        "Custom reporting",
        "Business process optimization"
      ]
    },
    {
      id: "maintenance",
      title: "Maintenance & Updates",
      description: "Keep your existing website secure, up-to-date, and running smoothly with ongoing maintenance and support.",
      features: [
        "Security updates",
        "Performance optimization",
        "Content updates",
        "Feature additions",
        "Technical support"
      ]
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We'll start with a free consultation to understand your business goals, target audience, and project requirements. From there, I'll create a detailed proposal with timeline and pricing.",
      icon: <ChatCircleText size={24} />
    },
    {
      id: 2,
      title: "Design & Development",
      description: "Once the proposal is approved, I'll create wireframes and designs for your approval, then build your website or application with regular updates throughout the process.",
      icon: <CheckCircle size={24} />
    },
    {
      id: 3,
      title: "Testing & Launch",
      description: "After thorough testing across devices and browsers, we'll launch your project. I'll provide training on how to use and update your new website or application.",
      icon: <CalendarCheck size={24} />
    },
    {
      id: 4,
      title: "Ongoing Support",
      description: "I offer ongoing maintenance and support to ensure your website continues to perform well and stays secure. Regular updates and improvements keep your site running smoothly.",
      icon: <Clock size={24} />
    }
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
          <h1>Available for Project Work</h1>
          <p>Custom development solutions for local businesses</p>
          <a href="#contact" className="freelance__cta-button">
            Let's Build Something Together
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>

      {/* What I Build Section */}
      <section className="freelance__services">
        <h2 className="section__heading">What I Build For Clients</h2>
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
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="freelance__feature-list">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Working Together Section */}
      <section className="freelance__process">
        <h2 className="section__heading">Working Together</h2>
        <div className="freelance__process-content">
          <div className="freelance__process-info">
            <div className="freelance__info-card">
              <h3>Project Timeline</h3>
              <p>Most projects take between 3-6 weeks from initial consultation to launch, depending on complexity and scope. Simple websites can be completed in as little as 2 weeks, while larger applications may take 8-12 weeks.</p>
            </div>
            <div className="freelance__info-card">
              <h3>Communication</h3>
              <p>I provide weekly progress updates via email and schedule regular video calls to review work and gather feedback. I'm available via email Monday-Friday with a response time of 24 hours or less.</p>
            </div>
          </div>
          
          <div className="freelance__process-steps">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                className="freelance__step"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: step.id * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="freelance__step-icon">
                  {step.icon}
                  <span>{step.id}</span>
                </div>
                <div className="freelance__step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="freelance__contact">
        <h2 className="section__heading">Let's Talk</h2>
        <div className="freelance__contact-content">
          <div className="freelance__contact-info">
            <h3>Free Initial Consultation</h3>
            <p>I offer a free 30-minute consultation to discuss your project needs and how I can help your business succeed online.</p>
            <p>You can expect a response within 24 hours of your inquiry.</p>
            <div className="freelance__contact-details">
              <a href="mailto:gabrielabarreira@outlook.com" className="freelance__email-link">
                gabrielabarreira@outlook.com
              </a>
              <div className="freelance__social-links">
                <a 
                  href="https://www.linkedin.com/in/gabriela-barreira/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="freelance__social-link"
                >
                  LinkedIn
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
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="message">Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  aria-required="true"
                  placeholder="Please describe your project needs and timeline."
                ></textarea>
              </div>
              <button type="submit" className="freelance__submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Freelance;

