import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Lightbulb } from "@phosphor-icons/react";
import "./Experience.scss";

type ExperienceType = "work" | "education" | "skills";

const workExperience = [
  {
    title: "Junior Developer & Web Content Manager",
    company: "Precision Nutrition",
    period: "Jul 2020 - Present",
    location: "Remote",
    description: [
      "Manage web content lifecycle for health platform serving 100,000+ monthly visitors, including WordPress publishing, HTML formatting, and document conversions with citation systems",
      "Build landing pages and implement A/B tests for pop-ups, lead magnets, and campaign assets",
      "Fix bugs and complete feature tickets in Rails codebase, contributing to tech debt reduction",
      "Analyze traffic and engagement data in Google Analytics and Search Console to inform content placement decisions",
      "Coordinate across designers (Figma), copywriters, product owners, and partnership leads through PR workflows and Slack",
      "Conduct cross-browser and functional QA before launches",
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
      "Technical program combining digital media, communication strategies, and web technologies. Coursework included introductory programming, digital media production, and user experience principles—providing a foundation for understanding the intersection of technology and human-centered design.",
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
    category: "How I Work",
    skills: [
      "Cross-functional coordination: I work with designers in Figma, developers in PRs, copywriters in Slack, and stakeholders in Basecamp. Getting everyone aligned is half the job.",
      "AI-enhanced workflow: I use Claude and Cursor for code review and debugging, ChatGPT for content strategy, Perplexity for research. These tools are part of my daily work, not buzzwords.",
      "Data-informed decisions: I pull analytics from GA and Search Console to figure out what's working and what needs to change.",
      "Ship and iterate: I'd rather get something live and improve it than wait for perfect. QA it, launch it, learn from it.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<ExperienceType>("work");

  return (
    <section className="experience" id="experience">
      <h2 className="section__heading">Experience</h2>

      <p className="experience__intro">
        I've spent 5+ years at the intersection of marketing and development. I build landing pages, manage content systems, implement A/B tests, and fix bugs in production codebases. The throughline is getting things out the door while coordinating across designers, developers, copywriters, and stakeholders.
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
