import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Projects.scss";

import discloserImage from "../../assets/images/projects/discloser.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string;
  image?: string;
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
      id: "pn-level1-landing",
      title: "Precision Nutrition – Level 1 Certification Landing Page",
      description:
        "Flagship conversion page for PN's Level 1 Certification, serving 175,000+ coaches worldwide. Full ownership of layout, content structure, responsive design, and performance, built with Astro and Preact islands.",
      tech: "Astro, Preact, TypeScript, SCSS",
      featured: true,
      links: {
        live: "https://precisionnutrition.com/nutrition-certification-level-1-register-now",
        liveLabel: "Visit Site",
      },
    },
    {
      id: "discloser-ios",
      title: "Discloser - Mobile App",
      description:
        "A privacy-first React Native iOS app for sharing sensitive health information, with OCR document verification, time-limited QR sharing, and risk-based reminders. Designed and built end to end, currently in App Store review.",
      tech: "React Native, iOS, Node.js, Express, MySQL, OCR",
      image: discloserImage,
      featured: true,
      links: {
        github: "https://github.com/nameisbri/discloser",
        live: "https://discloser.app",
        liveLabel: "Visit Landing Page",
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
        Selected Work
      </h2>

      <div ref={ref} className="projects__list">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`projects__item ${project.featured ? "projects__item--featured" : ""} ${!project.image ? "projects__item--no-image" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {project.image && (
              <div className="projects__image-container">
                <img
                  src={project.image}
                  alt={`${project.title}`}
                  className="projects__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

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

      <div className="projects__neblina">
        <h3 className="projects__neblina-heading">Neblina</h3>
        <p className="projects__neblina-body">
          I also run Neblina, a product studio. When a project needs more than
          one person's worth of strategy, design, and engineering, that's where
          it lives.
        </p>
        <a
          href="https://neblina.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="projects__link"
        >
          See client work at Neblina
        </a>
      </div>
    </section>
  );
};

export default Projects;
