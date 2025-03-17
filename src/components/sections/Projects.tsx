import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GithubLogo, Globe } from "@phosphor-icons/react";
import "./Projects.scss";

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  timeline: string;
  tech: string[];
  role: string;
  teamSize?: number;
  collaboration?: string;
  image: string;
  links?: {
    github?: string;
    live?: string;
  };
  keyFeatures: string[];
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "discloser",
      title: "Discloser - Health Information Platform",
      description:
        "A secure platform that allows users to manage and share their sexual health information privately and efficiently. The app features OCR extraction from medical documents, risk-based testing reminders, and private sharing capabilities.",
      type: "Capstone",
      timeline: "February 2025",
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
      image: "/images/discloser.jpg",
      links: {
        github: "https://github.com/nameisbri/discloser",
      },
      keyFeatures: [
        "Secure document upload and storage",
        "OCR technology to extract data from medical records",
        "Customizable sharing options with consent management",
        "Smart notification system for testing reminders",
        "End-to-end encryption for sensitive health data",
      ],
    },
    {
      id: "instock",
      title: "InStock - Inventory Management System",
      description:
        "A full-stack inventory management application built for a fictional Fortune 500 client, addressing scalability issues in their existing system that struggled with heavy traffic loads.",
      type: "Team Project",
      timeline: "January 2025",
      tech: ["React", "Node.js", "Express", "SASS/BEM", "Axios", "REST API"],
      role: "Full Stack Developer",
      teamSize: 4,
      collaboration:
        "Collaborated with Amir Gholizad, Cara Zhang, and Nadia Kasim using Git/GitHub, Jira, and agile methodologies.",
      image: "/images/instock.jpg",
      links: {
        github: "https://github.com/nameisbri/bug-busters-instock",
      },
      keyFeatures: [
        "Warehouse management with detailed information and contact details",
        "Inventory tracking across multiple locations",
        "CRUD operations for both warehouses and inventory items",
        "Sortable data tables and search functionality",
        "Responsive design using BEM/SASS methodology",
      ],
    },
    {
      id: "microsoft",
      title: "AI Business Consultant",
      description:
        "An interactive web application designed to help small businesses integrate AI into their operations, developed during a 24-hour hackathon organized by Microsoft and BrainStation.",
      type: "Hackathon",
      timeline: "January 2025",
      tech: ["React.js", "SCSS", "JavaScript", "GitHub Pages"],
      role: "Frontend Developer",
      teamSize: 6,
      collaboration:
        "Worked in a team of 6 during a 24-hour hackathon, collaborating through GitHub and presenting to Microsoft judges.",
      image: "/images/microsoft.jpg",
      links: {
        github: "https://github.com/nameisbri/microsoft-industry-project",
        live: "https://nameisbri.github.io/microsoft-industry-project",
      },
      keyFeatures: [
        "Business model assessment for AI readiness",
        "Cost analysis comparing traditional approaches vs. AI solutions",
        "AI-generated marketing assets and brand identity suggestions",
        "Personalized recommendations for Microsoft AI services",
        "Interactive chat interface for guided user experience",
      ],
    },
    {
      id: "animal-trivia",
      title: "Animal Trivia - Interactive Quiz Game",
      description:
        "An educational quiz application focused on animal facts, developed during a BrainStation hackathon. The game features dynamic scoring and interactive elements to engage users while they learn.",
      type: "Hackathon",
      timeline: "January 2025",
      tech: ["JavaScript", "React", "REST API", "CSS"],
      role: "JavaScript Lead",
      teamSize: 3,
      collaboration:
        "Led API integration and core game logic development in a team of 3, delivering within a 24-hour deadline.",
      image: "/images/animal-trivia.jpg",
      links: {
        github: "https://github.com/nameisbri/animal-trivia",
      },
      keyFeatures: [
        "Interactive quiz interface with animal facts",
        "Dynamic scoring system based on response time",
        "Integration with external API for animal data",
        "Educational content delivered through engaging gameplay",
        "Mobile-responsive design for play on various devices",
      ],
    },
    {
      id: "event-management",
      title: "Event Management App",
      description:
        "A responsive web application for browsing, creating, and managing local events across the Greater Toronto Area. Users can discover events, create their own, and manage RSVPs.",
      type: "Hackathon",
      timeline: "January 2025",
      tech: ["React", "SCSS", "Axios", "REST API"],
      role: "Frontend Developer",
      teamSize: 4,
      image: "/images/event-app.jpg",
      links: {
        github: "https://github.com/nameisbri/event-management-app",
      },
      keyFeatures: [
        "Event discovery with filtering by location, date, and category",
        "User event creation and management interface",
        "RSVP functionality with attendance tracking",
        "Mobile-responsive interface for on-the-go use",
        "Geolocation features to find nearby events",
      ],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.type.toLowerCase() === filter.toLowerCase()
        );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="projects" id="projects">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="projects__header"
      >
        <h2 className="section__heading">Projects</h2>
        <p className="projects__subtitle">
          Recent work from my BrainStation Software Engineering program and
          hackathons.
        </p>

        <div className="projects__filters">
          <button
            className={`projects__filter ${
              filter === "all" ? "projects__filter--active" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`projects__filter ${
              filter === "Capstone" ? "projects__filter--active" : ""
            }`}
            onClick={() => setFilter("Capstone")}
          >
            Capstone
          </button>
          <button
            className={`projects__filter ${
              filter === "Team Project" ? "projects__filter--active" : ""
            }`}
            onClick={() => setFilter("Team Project")}
          >
            Team Projects
          </button>
          <button
            className={`projects__filter ${
              filter === "Hackathon" ? "projects__filter--active" : ""
            }`}
            onClick={() => setFilter("Hackathon")}
          >
            Hackathons
          </button>
        </div>
      </motion.div>

      <motion.div
        className="projects__grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className={`projects__card ${
              activeProject === project.id ? "projects__card--active" : ""
            }`}
            variants={item}
            onClick={() =>
              setActiveProject(activeProject === project.id ? null : project.id)
            }
          >
            <div className="projects__card-header">
              <h3 className="projects__card-title">{project.title}</h3>
              <span className="projects__card-type">{project.type}</span>
            </div>

            <div className="projects__card-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="projects__tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <p className="projects__card-description">
              {project.description.length > 150 && activeProject !== project.id
                ? `${project.description.substring(0, 150)}...`
                : project.description}
            </p>

            {activeProject === project.id && (
              <motion.div
                className="projects__card-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <div className="projects__details-section">
                  <h4>Key Features</h4>
                  <ul className="projects__features-list">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="projects__feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.role && (
                  <div className="projects__details-section">
                    <h4>My Role</h4>
                    <p>{project.role}</p>
                  </div>
                )}

                {project.collaboration && (
                  <div className="projects__details-section">
                    <h4>Collaboration</h4>
                    <p>{project.collaboration}</p>
                  </div>
                )}

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
            )}

            <button className="projects__expand-btn">
              {activeProject === project.id ? "Show Less" : "Read More"}
              <ArrowRight
                size={16}
                className={`projects__expand-icon ${
                  activeProject === project.id
                    ? "projects__expand-icon--rotate"
                    : ""
                }`}
              />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
