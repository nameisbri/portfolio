import { motion } from "framer-motion";
import { GithubLogo, Globe } from "@phosphor-icons/react";
import "./Projects.scss";

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  tech: string[];
  role: string;
  links?: {
    github?: string;
    live?: string;
  };
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "discloser",
      title: "Discloser - Health Information Platform",
      description:
        "A secure platform that allows users to manage and share their sexual health information privately and efficiently. Features OCR extraction from medical documents, risk-based testing reminders, and private sharing capabilities.",
      type: "Capstone",
      tech: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "OCR",
        "SCSS",
      ],
      role: "Full Stack Developer",
      links: {
        github: "https://github.com/nameisbri/discloser",
      },
    },
    {
      id: "instock",
      title: "InStock - Inventory Management System",
      description:
        "A full-stack inventory management application built for a fictional Fortune 500 client. Addresses scalability issues with warehouse management and inventory tracking across multiple locations.",
      type: "Team Project",
      tech: ["React", "Node.js", "Express", "SASS/BEM", "Axios", "REST API"],
      role: "Full Stack Developer",
      links: {
        github: "https://github.com/nameisbri/bug-busters-instock",
      },
    },
    {
      id: "microsoft",
      title: "AI Business Consultant",
      description:
        "An interactive web application designed to help small businesses integrate AI into their operations, developed during a 24-hour hackathon organized by Microsoft and BrainStation.",
      type: "Hackathon",
      tech: ["React.js", "SCSS", "JavaScript", "GitHub Pages"],
      role: "Frontend Developer",
      links: {
        github: "https://github.com/nameisbri/microsoft-industry-project",
        live: "https://nameisbri.github.io/microsoft-industry-project",
      },
    },
    {
      id: "animal-trivia",
      title: "Animal Trivia - Interactive Quiz Game",
      description:
        "An educational quiz application focused on animal facts, developed during a BrainStation hackathon with dynamic scoring and interactive elements.",
      type: "Hackathon",
      tech: ["JavaScript", "React", "REST API", "CSS"],
      role: "JavaScript Lead",
      links: {
        github: "https://github.com/nameisbri/animal-trivia",
      },
    },
    {
      id: "event-management",
      title: "Event Management App",
      description:
        "A responsive web application for browsing, creating, and managing local events across the Greater Toronto Area.",
      type: "Hackathon",
      tech: ["React", "SCSS", "Axios", "REST API"],
      role: "Frontend Developer",
      links: {
        github: "https://github.com/nameisbri/event-management-app",
      },
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section__heading">Projects</h2>
      <p className="projects__subtitle">
        Recent work from my BrainStation Software Engineering program and
        hackathons.
      </p>

      <motion.div
        className="projects__grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="projects__card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="projects__image-container">
              <img
                src={`/api/placeholder/500/300`}
                alt={project.title}
                className="projects__image"
              />
              <span className="projects__card-type">{project.type}</span>
            </div>

            <h3 className="projects__card-title">{project.title}</h3>

            <div className="projects__card-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="projects__tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <p className="projects__card-description">{project.description}</p>

            <div className="projects__card-role">
              <strong>Role:</strong> {project.role}
            </div>

            <div className="projects__card-links">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                >
                  <GithubLogo size={20} />
                  <span>GitHub</span>
                </a>
              )}

              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link projects__link--live"
                >
                  <Globe size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
