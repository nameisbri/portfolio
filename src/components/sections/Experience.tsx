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
      "Design and develop mobile apps, websites, and digital products for clients across various industries",
      "Deliver end-to-end solutions from initial concept through design, development, and launch",
      "Leverage AI-enhanced workflows to provide efficient, high-quality results for freelance clients",
    ],
  },
  {
    title: "Web Developer",
    company: "Precision Nutrition",
    period: "Jul 2020 - Present",
    location: "Remote",
    description: [
      "Full-stack development including React application rebuilds and modern web development",
      "Focus on user experience, responsive design, and delivering quality technical solutions",
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
    category: "What I Deliver",
    skills: [
      "Complete mobile apps built with React Native, from design to App Store and Play Store deployment",
      "Modern, responsive websites that work beautifully on all devices",
      "Full product development from initial concept through launch",
      "Professional design that reflects your brand and engages your users",
    ],
  },
  {
    category: "How I Work",
    skills: [
      "Clear communication and regular updates throughout the project",
      "Efficient workflows using modern AI-assisted development tools",
      "Focus on quality and attention to detail in every deliverable",
      "Flexible collaboration that fits your timeline and needs",
    ],
  },
  {
    category: "Why Choose Me",
    skills: [
      "End-to-end capability: I handle both design and development, so you work with one person",
      "Modern approach: AI-enhanced workflows mean faster delivery without sacrificing quality",
      "Proven results: See my work in the projects above—real products, real clients",
      "Client-focused: Your success is my success, and I'm committed to delivering value",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<ExperienceType>("work");

  return (
    <section className="experience" id="experience">
      <h2 className="section__heading">The Full-Stack Edge</h2>

      <p className="experience__intro">
        Most founders get stuck playing 'telephone' between a designer and a developer. I bridge that gap. With 8+ years of experience and 20+ successful launches, I handle the entire lifecycle. You get the expertise of a full agency with the agility and direct communication of a single dedicated partner.
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
                Ready to bring your product idea to life? I work with businesses, entrepreneurs, and organizations to create mobile apps, websites, and digital products that make an impact. Let's discuss your project and see how I can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
