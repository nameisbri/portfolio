import { motion } from "framer-motion";
import { GithubLogo, Globe } from "@phosphor-icons/react";
import "./Projects.scss";

import discloserImage from "../../assets/images/projects/discloser.jpg";
import instockImage from "../../assets/images/projects/instock.jpg";
import microsoftImage from "../../assets/images/projects/microsoft.jpg";
import animalTriviaImage from "../../assets/images/projects/animal-trivia.jpg";
import nutritionCalculatorImage from "../../assets/images/projects/nutrition-calc.png";

interface Project {
  id: string;
  title: string;
  description: string;
  highlightedSkills: string;
  type: string;
  tech: string[];
  role: string;
  image: string;
  links?: {
    github?: string;
    live?: string;
  };
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "nutrition-calculator",
      title: "Nutrition Calculator Rebuild",
      description:
        "Leading the rebuild of a nutrition calculator application from Angular to React, improving user experience and modernizing the codebase. Actively participating in the full software development lifecycle from requirements analysis to implementation.",
      highlightedSkills:
        "React development, Angular code analysis, Agile methodologies, cross-functional collaboration",
      type: "Professional",
      tech: ["React", "JavaScript", "Angular", "Agile", "Jira", "Git"],
      role: "Frontend Developer",
      image: nutritionCalculatorImage,
      links: {}, // Omit links if this is private company work
    },
    {
      id: "discloser",
      title: "Discloser - Health Information Platform",
      description:
        "A secure platform that allows users to manage and share sensitive information privately. Features OCR extraction from documents, automated reminders, and private sharing capabilities.",
      highlightedSkills:
        "Full-stack development, database design, OCR integration, user authentication",
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
      image: discloserImage,
      links: {
        github: "https://github.com/nameisbri/discloser",
        live: "https://www.linkedin.com/feed/update/urn:li:activity:7302373369012785154/",
      },
    },
    {
      id: "instock",
      title: "InStock - Inventory Management System",
      description:
        "A full-stack inventory management application built for a fictional Fortune 500 client. Addresses scalability issues with warehouse management and inventory tracking across multiple locations.",
      highlightedSkills:
        "API development, relational database management, collaborative Git workflow",
      type: "Team Project",
      tech: ["React", "Node.js", "Express", "SASS/BEM", "Axios", "REST API"],
      role: "Full Stack Developer",
      image: instockImage,
      links: {
        live: "https://drive.google.com/file/d/17weBeLemqsBzaZrso3jCTzCa9-Ae4idM/view?usp=sharing",
      },
    },
    {
      id: "microsoft",
      title: "AI Business Consultant",
      description:
        "An interactive web application designed to help small businesses integrate AI into their operations, developed during a 24-hour hackathon organized by Microsoft and BrainStation.",
      highlightedSkills:
        "Rapid prototyping, agile development, UX design, interactive data visualization",
      type: "Hackathon",
      tech: ["React.js", "SCSS", "JavaScript", "GitHub Pages"],
      role: "Frontend Developer",
      image: microsoftImage,
      links: {
        github: "https://github.com/nameisbri/ip-team-2",
        live: "https://drive.google.com/file/d/1K7g485_1DY8wzvC0gNdupAORtVzrOhZr/view?usp=sharing",
      },
    },
    {
      id: "animal-trivia",
      title: "Animal Trivia - Interactive Quiz Game",
      description:
        "An educational quiz application focused on animal facts, developed during a BrainStation hackathon with dynamic scoring and interactive elements.",
      highlightedSkills:
        "JavaScript logic, API integration, state management, responsive design",
      type: "Hackathon",
      tech: ["JavaScript", "React", "REST API", "CSS"],
      role: "JavaScript Lead",
      image: animalTriviaImage,
      links: {
        github: "https://github.com/nameisbri/animal-trivia",
      },
    },
  ];

  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section__heading">
        Projects
      </h2>
      <p className="projects__subtitle">
        These projects represent my journey as a developer and my commitment to
        creating technology with purpose. Each one taught me something valuable
        about collaboration, problem-solving, and the art of writing code that
        matters.
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
            role="article"
            aria-labelledby={`project-title-${project.id}`}
          >
            <div className="projects__image-container">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title} project showing the interface`}
                className="projects__image"
                loading="lazy"
              />
              <span
                className="projects__card-type"
                aria-label={`Project type: ${project.type}`}
                role="note"
              >
                {project.type}
              </span>
            </div>

            <h3
              id={`project-title-${project.id}`}
              className="projects__card-title"
            >
              {project.title}
            </h3>

            <div className="projects__card-tech" aria-label="Technologies used">
              {project.tech.map((tech, index) => (
                <span key={index} className="projects__tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <p className="projects__card-description">{project.description}</p>

            <div className="projects__card-skills">
              <strong>Key Skills:</strong> {project.highlightedSkills}
            </div>

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
                  aria-label={`View ${project.title} code on GitHub`}
                >
                  <GithubLogo size={20} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}

              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link projects__link--live"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <Globe size={20} aria-hidden="true" />
                  <span>Demo</span>
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
