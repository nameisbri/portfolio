import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Experience.scss";

const workExperience = [
  {
    title: "Freelance Product Designer & Developer",
    company: "Independent",
    period: "2016 - Present",
    description: [
      "Design and develop mobile apps, websites, and digital products for clients across industries",
      "Handle full product lifecycle from concept through design, development, and deployment",
      "Use AI-assisted tools (Claude, Cursor) to streamline development workflows",
    ],
  },
  {
    title: "Web Developer",
    company: "Precision Nutrition",
    period: "Jul 2020 - Present",
    description: [
      "Full-stack development including React application rebuilds and feature work",
      "Focused on user experience, responsive design, and code quality",
    ],
  },
];

const educationExperience = [
  {
    degree: "Diploma, Software Engineering",
    institution: "BrainStation",
    period: "Nov 2024 - Feb 2025",
    description:
      "Intensive software engineering program with 400+ hours of hands-on coding. Full-stack development including JavaScript, TypeScript, React, Node.js, Express, and MySQL.",
  },
  {
    degree: "Bachelors in Media and Communication Technologies",
    institution: "Aveiro University",
    period: "2010 - 2014",
    description:
      "Technical program combining digital media, communication strategies, and web technologies. Coursework included programming, digital media production, and user experience principles.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section className="experience" id="experience" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section__heading">Experience</h2>

        <div className="experience__section">
          <h3 className="experience__section-title">Work</h3>
          <div className="experience__list">
            {workExperience.map((job) => (
              <div key={job.company} className="experience__item">
                <div className="experience__header">
                  <span className="experience__role">{job.title}</span>
                  <span className="experience__separator"> — </span>
                  <span className="experience__company">{job.company}</span>
                  <span className="experience__separator"> — </span>
                  <span className="experience__period">{job.period}</span>
                </div>
                <ul className="experience__description">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="experience__section">
          <h3 className="experience__section-title">Education</h3>
          <div className="experience__list">
            {educationExperience.map((edu) => (
              <div key={edu.institution} className="experience__item">
                <div className="experience__header">
                  <span className="experience__role">{edu.degree}</span>
                  <span className="experience__separator"> — </span>
                  <span className="experience__company">{edu.institution}</span>
                  <span className="experience__separator"> — </span>
                  <span className="experience__period">{edu.period}</span>
                </div>
                <p className="experience__edu-text">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
