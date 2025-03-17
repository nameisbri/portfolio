import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Lightbulb } from "@phosphor-icons/react";
import "./Experience.scss";

type ExperienceType = "work" | "education" | "skills";

const workExperience = [
  {
    title: "Web Content Manager",
    company: "Precision Nutrition",
    period: "Jul 2020 - Nov 2024",
    location: "Remote",
    description: [
      "Engineered and implemented optimization strategies that increased conversion rates by 12% and drove organic traffic growth of 23%, demonstrating strong analytical and problem-solving abilities",
      "Architected website performance improvements resulting in 25% faster page load time, enhancing user experience for over 100,000 monthly visitors, showing technical optimization skills",
      "Spearheaded cross-functional collaboration between marketing and development teams to execute business-critical digital initiatives, highlighting project management and communication expertise",
    ],
  },
  {
    title: "Web Marketing Coordinator",
    company: "EF Educational Tours",
    period: "Jul 2019 - Jun 2020",
    location: "Toronto, ON",
    description: [
      "Developed and deployed content optimization strategies that boosted user engagement by 20%, while enhancing overall performance metrics",
      "Built comprehensive web analytics dashboards using SQL and Google Analytics, enabling data-driven decision making across teams, showcasing data analysis skills",
    ],
  },
  {
    title: "e-Commerce Manager",
    company: "BOXPT Equipment",
    period: "Jan 2018 - Jun 2019",
    location: "Porto, Portugal",
    description: [
      "Launched targeted email marketing campaigns that achieved 20% higher open rates and improved customer retention",
      "Orchestrated management of 500+ SKUs while implementing optimization strategies that generated 10% growth in website traffic, demonstrating attention to detail and system organization",
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
      "Intensive software engineering program focused on full-stack development, including JavaScript, React, Node.js, Express, and MySQL. Completed multiple projects, including a capstone health information management platform and several hackathon projects demonstrating rapid development skills.",
  },
  {
    degree: "Bachelors in Media and Communication Technologies",
    institution: "Aveiro University",
    period: "2010 - 2014",
    location: "Aveiro, Portugal",
    description:
      "Studied digital media, communication strategies, and emerging technologies. Focused on the intersection of technology and communication, providing a unique foundation for understanding user experience and technical communication.",
  },
];

const skillsExperience = [
  {
    category: "Technical Skills",
    skills: [
      "Front-End: JavaScript, TypeScript, React, HTML5, CSS3/SCSS",
      "Back-End: Node.js, Express.js, RESTful APIs",
      "Database: MySQL, Database Design",
      "Tools & Methods: Git/GitHub, Agile/Kanban, Responsive Design",
      "Analysis: SQL Queries, Google Analytics, A/B Testing",
    ],
  },
  {
    category: "Transferable Skills",
    skills: [
      "Project Management: Coordinating cross-functional teams, timeline management",
      "Communication: Technical writing, stakeholder presentations, requirements gathering",
      "Problem Solving: Analytical thinking, debugging complex issues, system optimization",
      "User Advocacy: User experience optimization, accessibility considerations, user testing",
      "Business Acumen: Performance metrics, SEO principles, conversion optimization",
    ],
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
        <button
          className={`experience__tab ${
            activeTab === "skills" ? "experience__tab--active" : ""
          }`}
          onClick={() => setActiveTab("skills")}
        >
          <Lightbulb
            size={20}
            weight={activeTab === "skills" ? "fill" : "regular"}
          />
          <span>Skills</span>
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
        ) : activeTab === "education" ? (
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
        ) : (
          <div className="experience__skills">
            {skillsExperience.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="experience__skill-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="experience__skill-category">
                  {skillGroup.category}
                </h3>
                <ul className="experience__skill-list">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="experience__skill-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div
              className="experience__skills-note"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>
                My unique background in marketing and content management
                combined with software engineering skills allows me to bridge
                the gap between technical implementation and user needs,
                creating meaningful solutions in any industry.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
