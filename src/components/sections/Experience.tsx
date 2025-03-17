import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "@phosphor-icons/react";
import "./Experience.scss";

type ExperienceType = "work" | "education";

const workExperience = [
  {
    title: "Web Content Manager",
    company: "Precision Nutrition",
    period: "Jul 2020 - Nov 2024",
    location: "Remote",
    description: [
      "Engineered and implemented SEO optimization strategies that increased conversion rates by 12% and drove organic traffic growth of 23%",
      "Architected website performance improvements resulting in 25% faster page load time, enhancing user experience for over 100,000 monthly visitors",
      "Spearheaded cross-functional collaboration between marketing and development teams to execute business-critical digital initiatives",
    ],
  },
  {
    title: "Web Marketing Coordinator",
    company: "EF Educational Tours",
    period: "Jul 2019 - Jun 2020",
    location: "Toronto, ON",
    description: [
      "Developed and deployed content optimization strategies that boosted user engagement by 20%, while enhancing overall SEO performance metrics",
      "Built comprehensive web analytics dashboards using SQL and Google Analytics, enabling data-driven decision making across marketing teams",
    ],
  },
  {
    title: "e-Commerce Manager",
    company: "BOXPT Equipment",
    period: "Jan 2018 - Jun 2019",
    location: "Porto, Portugal",
    description: [
      "Launched targeted email marketing campaigns that achieved 20% higher open rates and improved customer retention",
      "Orchestrated management of 500+ SKUs while implementing optimization strategies that generated 10% growth in website traffic",
    ],
  },
];

const educationExperience = [
  {
    degree: "Diploma, Software Engineering",
    institution: "BrainStation",
    period: "Nov 2024 - Feb 2025",
    location: "Remote",
    description:
      "Intensive software engineering program focused on full-stack development, including JavaScript, React, Node.js, Express, and MySQL. Completed multiple projects, including a capstone health information management platform.",
  },
  {
    degree: "Bachelors in Media and Communication Technologies",
    institution: "Aveiro University",
    period: "2010 - 2014",
    location: "Aveiro, Portugal",
    description:
      "Studied digital media, communication strategies, and emerging technologies. Focused on the intersection of technology and communication.",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<ExperienceType>("work");

  return (
    <section className="experience" id="experience">
      <h2 className="section__heading">Experience</h2>

      <div className="experience__tabs">
        <button
          className={`experience__tab ${
            activeTab === "work" ? "experience__tab--active" : ""
          }`}
          onClick={() => setActiveTab("work")}
        >
          <Briefcase
            size={20}
            weight={activeTab === "work" ? "fill" : "regular"}
          />
          <span>Work</span>
        </button>
        <button
          className={`experience__tab ${
            activeTab === "education" ? "experience__tab--active" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          <GraduationCap
            size={20}
            weight={activeTab === "education" ? "fill" : "regular"}
          />
          <span>Education</span>
        </button>
      </div>

      <div className="experience__content">
        {activeTab === "work" ? (
          <div className="experience__timeline">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.company}
                className="experience__item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="experience__header">
                  <h3 className="experience__title">{job.title}</h3>
                  <p className="experience__company">{job.company}</p>
                  <p className="experience__period">
                    <span>{job.period}</span>
                    <span className="experience__location">{job.location}</span>
                  </p>
                </div>
                <ul className="experience__description">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="experience__timeline">
            {educationExperience.map((edu, index) => (
              <motion.div
                key={edu.institution}
                className="experience__item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="experience__header">
                  <h3 className="experience__title">{edu.degree}</h3>
                  <p className="experience__company">{edu.institution}</p>
                  <p className="experience__period">
                    <span>{edu.period}</span>
                    <span className="experience__location">{edu.location}</span>
                  </p>
                </div>
                <p className="experience__edu-description">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
