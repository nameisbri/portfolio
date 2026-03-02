import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Projects.scss";

import discloserImage from "../../assets/images/projects/discloser.jpg";
import nutritionCalculatorImage from "../../assets/images/projects/nutrition-calc.png";
import discloserLandingImage from "../../assets/images/projects/discloser-landing.png";
import yellowBrollyImage from "../../assets/images/projects/yellow-brolly.png";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string;
  image: string;
  featured?: boolean;
  links?: {
    github?: string;
    live?: string;
    liveLabel?: string;
  };
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
      tech: "React Native, iOS, Node.js, Express, MySQL, OCR",
      image: discloserImage,
      featured: true,
      links: {
        github: "https://github.com/nameisbri/discloser",
        live: "https://discloser.app",
        liveLabel: "Visit Landing Page",
      },
    },
    {
      id: "discloser-landing",
      title: "Discloser - Landing Page",
      description:
        "Marketing site for the Discloser mobile app. Responsive design, clear information architecture, and optimized for mobile.",
      tech: "React, TypeScript, SCSS",
      image: discloserLandingImage,
      links: {
        live: "https://discloser.app",
        liveLabel: "Visit Site",
      },
    },
    {
      id: "yellow-brolly",
      title: "Yellow Brolly Co.",
      description:
        "Professional consulting website for Yellow Brolly Co. Clean, modern design with clear service presentation and responsive layout.",
      tech: "React, TypeScript, SCSS",
      image: yellowBrollyImage,
      links: {
        live: "https://yellow-brolly.vercel.app/",
        liveLabel: "Visit Site",
      },
    },
    {
      id: "nutrition-calculator",
      title: "Nutrition Calculator Rebuild",
      description:
        "Led the rebuild of a nutrition calculator application from Angular to React at Precision Nutrition, improving user experience and modernizing the codebase.",
      tech: "React, JavaScript, Angular, Agile",
      image: nutritionCalculatorImage,
    },
  ];

  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section__heading">
        Selected Work
      </h2>

      <div ref={ref} className="projects__list">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`projects__item ${project.featured ? "projects__item--featured" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="projects__image-container">
              <img
                src={project.image}
                alt={`${project.title}`}
                className="projects__image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="projects__info">
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__tech">{project.tech}</p>
              <p className="projects__description">{project.description}</p>

              <div className="projects__links">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    GitHub
                  </a>
                )}
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    {project.links.liveLabel || "View Site"}
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
