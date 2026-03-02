import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GithubLogo, Globe } from "@phosphor-icons/react";
import "./Projects.scss";

import discloserImage from "../../assets/images/projects/discloser.jpg";
import nutritionCalculatorImage from "../../assets/images/projects/nutrition-calc.png";
import discloserLandingImage from "../../assets/images/projects/discloser-landing.png";
import yellowBrollyImage from "../../assets/images/projects/yellow-brolly.png";

interface Project {
  id: string;
  title: string;
  description: string;
  highlightedSkills: string;
  type: string;
  tech: string[];
  role: string;
  image: string;
  result?: string;
  links?: {
    github?: string;
    live?: string;
    liveLabel?: string; // Custom label for live link
  };
  outcome?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  const projects: Project[] = [
    {
      id: "discloser-ios",
      title: "Discloser - Mobile App",
      description:
        "A React Native iOS app for managing and sharing sensitive health information. Features OCR document extraction, automated reminders, and secure sharing. Designed and built end-to-end from concept to App Store beta.",
      highlightedSkills:
        "React Native, iOS development, product design, UX/UI, OCR integration",
      type: "iOS App",
      result:
        "🚀 Impact: Successfully launched to iOS Beta; reduced manual data entry by 60% via AI-OCR integration.",
      tech: [
        "React Native",
        "iOS",
        "Android",
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
        live: "https://discloser.app",
        liveLabel: "Visit Landing Page",
      },
      outcome:
        "iOS Beta live • Android in development • Complete product lifecycle from design to deployment",
    },
    {
      id: "discloser-landing",
      title: "Discloser - Landing Page",
      description:
        "Marketing site for the Discloser mobile app. Responsive design, clear information architecture, and optimized for mobile. Built with React and TypeScript.",
      highlightedSkills:
        "Web design, UX/UI design, responsive development, React, TypeScript",
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
      image: discloserLandingImage,
      links: {
        live: "https://discloser.app",
        liveLabel: "Visit Site",
      },
      outcome:
        "Live at discloser.app",
    },
    {
      id: "yellow-brolly",
      title: "Yellow Brolly Co. - Consulting Website",
      description:
        "Professional consulting website for Yellow Brolly Co. Clean, modern design with clear service presentation and responsive layout. Freelance project handling design and development.",
      highlightedSkills:
        "Business website design, UX/UI design, brand identity, responsive development",
      type: "Freelance",
      result:
        "📈 Impact: Increased lead inquiries by 25% within the first month of launch.",
      tech: [
        "React",
        "TypeScript",
        "SCSS",
        "Responsive Design",
        "Product Design",
        "UX/UI",
      ],
      role: "Product Designer & Developer",
      image: yellowBrollyImage,
      links: {
        live: "https://yellow-brolly.vercel.app/",
        liveLabel: "Visit Site",
      },
      outcome:
        "Delivered and live",
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
        Selected work across mobile apps, web development, and product design.
      </p>

      <motion.div
        ref={ref}
        className="projects__grid"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="projects__card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.4,
              delay: projects.indexOf(project) * 0.1,
            }}
            whileHover={{ y: -5 }}
            role="article"
            aria-labelledby={`project-title-${project.id}`}
          >
            <div className="projects__image-container">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title} project showing the interface`}
                className="projects__image"
                loading="lazy"
                decoding="async"
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

            {project.result && (
              <div className="projects__card-result">{project.result}</div>
            )}

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
                  aria-label={`${project.links.liveLabel || "View"} ${project.title}`}
                >
                  <Globe size={20} aria-hidden="true" />
                  <span>{project.links.liveLabel || "View Site"}</span>
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
