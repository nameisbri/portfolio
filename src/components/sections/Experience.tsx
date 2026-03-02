import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Lightbulb } from "@phosphor-icons/react";
import "./Experience.scss";

type ExperienceType = "work" | "education" | "skills";

const workExperience = [
  {
    title: "Freelance Product Designer & Developer",
    company: "Independent",
    period: "2016 - Present",
    location: "Remote",
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
    location: "Remote",
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
    location: "Remote",
    description:
      "Intensive software engineering program with 400+ hours of hands-on coding, focused on full-stack development including JavaScript, TypeScript, React, Node.js, Express, and MySQL. Completed 3 major projects including a health information management platform, demonstrating rapid skill acquisition and practical application in professional-level coding environments.",
  },
  {
    degree: "Bachelors in Media and Communication Technologies",
    institution: "Aveiro University",
    period: "2010 - 2014",
    location: "Aveiro, Portugal",
    description:
      "Technical program combining digital media, communication strategies, and web technologies. Coursework included introductory programming, digital media production, and user experience principles—providing a foundation for understanding the intersection of technology and human-centered design.",
  },
];

const skillsExperience = [
  {
    category: "Development",
    skills: [
      "React Native mobile apps (iOS & Android) from prototype to App Store",
      "React, TypeScript, Node.js, Express, MySQL full-stack development",
      "Responsive web applications with modern tooling",
      "AI-assisted development workflows with Claude and Cursor",
    ],
  },
  {
    category: "Design",
    skills: [
      "Product design from user research through high-fidelity prototypes",
      "UX/UI design in Figma with a focus on usability",
      "Design systems and component libraries",
      "Responsive design across mobile, tablet, and desktop",
    ],
  },
  {
    category: "Process",
    skills: [
      "Full product lifecycle: research, design, build, test, deploy",
      "Cross-functional collaboration with designers, developers, and stakeholders",
      "Agile methodologies and iterative development",
      "Version control with Git, CI/CD pipelines",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<ExperienceType>("work");

  return (
    <section className="experience" id="experience">
      <h2 className="section__heading">Experience</h2>

      <p className="experience__intro">
        8+ years across product design and development. 20+ products shipped. I work across the full lifecycle — research, design, build, deploy.
      </p>

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

          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
