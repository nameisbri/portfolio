import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../../context/LanguageContext";
import "./Experience.scss";

const Experience = () => {
  const { t } = useLang();
  const workExperience = t.experience.work;
  const educationExperience = t.experience.education;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section className="experience" id="experience" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section__heading">{t.experience.heading}</h2>

        <div className="experience__section">
          <h3 className="experience__section-title">{t.experience.workTitle}</h3>
          <div className="experience__list">
            {workExperience.map((job) => (
              <div key={job.company} className="experience__item">
                <div className="experience__header">
                  <span className="experience__role">{job.title}</span>
                  <span className="experience__separator"> — </span>
                  {job.companyLink ? (
                    <a
                      className="experience__company"
                      href={job.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="experience__company">{job.company}</span>
                  )}
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
          <h3 className="experience__section-title">{t.experience.educationTitle}</h3>
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
