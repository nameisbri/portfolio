import { motion } from "framer-motion";
import { GithubLogo, Globe } from "@phosphor-icons/react";
import "./Projects.scss";

import discloserImage from "../../assets/images/projects/discloser.jpg";
import nutritionCalculatorImage from "../../assets/images/projects/nutrition-calc.png";
// TODO: Add images for Discloser landing page and Yellow Brolly Co.

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
      id: "discloser-ios",
      title: "Discloser - iOS App",
      description:
        "A native iOS app built with React Native that allows users to manage and share sensitive health information privately. Features OCR extraction from documents, automated reminders, and secure sharing capabilities. Designed and developed from concept to App Store deployment with a focus on user privacy and intuitive UX.",
      highlightedSkills:
        "React Native iOS development, product design, UX/UI design, OCR integration, native mobile development, AI-assisted workflows",
      type: "iOS App",
      tech: [
        "React Native",
        "iOS",
        "JavaScript",
        "Node.js",
        "Express",
        "MySQL",
        "OCR",
        "Product Design",
      ],
      role: "Product Designer & Developer",
      image: discloserImage,
      links: {
        github: "https://github.com/nameisbri/discloser",
        live: "https://www.linkedin.com/feed/update/urn:li:activity:7302373369012785154/",
      },
    },
    {
      id: "discloser-landing",
      title: "Discloser - Landing Page",
      description:
        "A modern, conversion-focused landing page designed and developed for the Discloser iOS app. Features responsive design, clear value proposition, and seamless user experience to drive app downloads. Built with attention to UX principles and conversion optimization.",
      highlightedSkills:
        "Web design, UX/UI design, responsive development, conversion optimization, product marketing, AI-assisted development",
      type: "Web Design",
      tech: [
        "React",
        "TypeScript",
        "SCSS",
        "Responsive Design",
        "Product Design",
        "UX/UI",
      ],
      role: "Product Designer & Developer",
      image: discloserImage, // TODO: Replace with Discloser landing page image
      links: {
        live: "https://discloser.app",
      },
    },
    {
      id: "yellow-brolly",
      title: "Yellow Brolly Co. - Consulting Website",
      description:
        "A professional consulting business website designed and developed for Yellow Brolly Co. Features clean, modern design, clear service offerings, and optimized user experience to showcase consulting expertise and attract clients. Built with focus on professional branding and lead generation.",
      highlightedSkills:
        "Business website design, UX/UI design, brand identity, responsive development, conversion optimization, freelance project management",
      type: "Freelance",
      tech: [
        "React",
        "TypeScript",
        "SCSS",
        "Responsive Design",
        "Product Design",
        "UX/UI",
      ],
      role: "Product Designer & Developer",
      image: discloserImage, // TODO: Replace with Yellow Brolly Co. image
      links: {
        live: "https://yellow-brolly.vercel.app/",
      },
    },
    {
      id: "nutrition-calculator",
      title: "Nutrition Calculator Rebuild",
      description:
        "Professional work leading the rebuild of a nutrition calculator application from Angular to React, improving user experience and modernizing the codebase. Participated in the full software development lifecycle from requirements analysis to implementation.",
      highlightedSkills:
        "React development, Angular code analysis, Agile methodologies, cross-functional collaboration",
      type: "Professional",
      tech: ["React", "JavaScript", "Angular", "Agile", "Jira", "Git"],
      role: "Frontend Developer",
      image: nutritionCalculatorImage,
      links: {}, // Omit links if this is private company work
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
        A collection of freelance projects, side projects, and product work showcasing my expertise in React Native iOS apps, web development, product design, and AI-enhanced development workflows. Each project demonstrates end-to-end product thinking—from design to implementation.
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
