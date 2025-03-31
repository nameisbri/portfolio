import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Lightbulb } from "@phosphor-icons/react";
import "./Experience.scss";

type ExperienceType = "work" | "education" | "skills";

const workExperience = [
  {
    title: "Web Content Manager / Junior Developer",
    company: "Precision Nutrition",
    period: "Jul 2020 - Present",
    location: "Remote",
    description: [
      "Currently leading the rebuild of a nutrition calculator from Angular to React, participating in the complete software development lifecycle",
      "Collaborating in an Agile development environment using Jira for task management and Git for version control, including sprint planning and code reviews",
      "Engineering SEO optimization strategies using JavaScript and data analysis tools that increased conversion rates by 12% and drove organic traffic growth of 23%",
      "Developing and maintaining marketing landing pages using HTML, CSS, and PHP while ensuring cross-browser compatibility and responsive design",
      "Leading cross-functional QA processes including manual testing, UX analysis, and documentation of technical bugs",
    ],
  },
  {
    title: "Web Marketing Coordinator",
    company: "EF Educational Tours",
    period: "Jul 2019 - Jun 2020",
    location: "Toronto, ON",
    description: [
      "Developed content optimization strategies that boosted user engagement by 20%, utilizing A/B testing methodologies similar to software testing principles",
      "Built comprehensive web analytics dashboards using SQL and Google Analytics, demonstrating data visualization and database query capabilities essential for modern development roles",
      "Collaborated with international teams across multiple time zones, developing the communication skills needed for distributed software development environments",
    ],
  },
  {
    title: "e-Commerce Manager",
    company: "BOXPT Equipment",
    period: "Jan 2018 - Jun 2019",
    location: "Porto, Portugal",
    description: [
      "Managed e-commerce platform technical configurations, gaining hands-on experience with frontend customization and integration with payment systems",
      "Orchestrated digital inventory system for 500+ SKUs, implementing database organization principles and optimization techniques transferable to software development",
      "Executed technical SEO improvements and platform optimizations that increased site performance and drove 10% growth in traffic through systematic problem analysis",
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
      "Technical program combining digital media, communication strategies, and emerging technologies. Coursework included introductory programming, digital media production, and user experience principles—providing a foundation for understanding the intersection of technology and human-centered design that informs my development approach across industries.",
  },
];

const skillsExperience = [
  {
    category: "Technical Skills",
    skills: [
      "Frontend: JavaScript, TypeScript, React, HTML5, CSS3/SCSS, Responsive Design",
      "Backend: Node.js, Express.js, RESTful API Development, Authentication Systems",
      "Database: MySQL, Database Design, SQL Query Optimization",
      "Tools & Methods: Git/GitHub, Agile/Kanban, CI/CD Concepts",
      "Testing: Unit Testing, End-to-End Testing Concepts, QA Methodology",
    ],
  },
  {
    category: "Professional Strengths",
    skills: [
      "Technical Problem Solving: Systematic debugging, analytical thinking, optimization strategies",
      "Project Management: Cross-functional coordination, timeline management, stakeholder communication",
      "User Advocacy: User experience principles, accessibility considerations, performance optimization",
      "Data Analysis: Metrics interpretation, visualization creation, data-driven decision making",
      "Technical Communication: Documentation, requirements gathering, cross-department translation",
    ],
  },
  {
    category: "Industry Knowledge",
    skills: [
      "Diverse Industry Adaptability: Quickly acquiring domain knowledge across different sectors",
      "Health & Wellness: Understanding of health information systems and digital health trends (adds depth to health-tech projects but not limited to this sector)",
      "E-commerce & Digital Marketing: Experience with online platforms across multiple industries",
      "Educational Technology: Background in digital learning environments and content systems",
      "Global Markets: Experience working with international teams and diverse cultural contexts",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<ExperienceType>("work");

  return (
    <section className="experience" id="experience">
      <h2 className="section__heading">Experience</h2>

      <p className="experience__intro">
        The transition from marketing to development has been both natural and
        eye-opening. Each step in my career has been guided by a desire to
        create meaningful connections—first through content, now through code.
        This dual perspective allows me to bridge technical possibilities with
        human realities, building solutions that work for people, not just
        systems.
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
            <motion.div
              className="experience__skills-note"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>
                My unique background combines software engineering skills with
                real-world business experience, allowing me to approach
                development with both technical excellence and strategic
                insight. I'm adaptable to various industries while bringing
                particular depth to projects involving user experience,
                data-driven systems, and cross-functional collaboration.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
