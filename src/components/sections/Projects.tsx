import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../../context/LanguageContext";
import "./Projects.scss";

import discloserImage from "../../assets/images/projects/discloser.jpg";

interface ProjectMeta {
  id: string;
  tech: string;
  image?: string;
  featured?: boolean;
  links?: {
    github?: string;
    live?: string;
  };
}

const projectMeta: ProjectMeta[] = [
  {
    id: "pn-level1-landing",
    tech: "Astro, Preact, TypeScript, SCSS",
    featured: true,
    links: {
      live: "https://precisionnutrition.com/nutrition-certification-level-1-register-now",
    },
  },
  {
    id: "discloser-ios",
    tech: "React Native, iOS, Node.js, Express, MySQL, OCR",
    image: discloserImage,
    featured: true,
    links: {
      github: "https://github.com/nameisbri/discloser",
      live: "https://discloser.app",
    },
  },
];

const Projects = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section__heading">
        {t.projects.heading}
      </h2>

      <div ref={ref} className="projects__list">
        {projectMeta.map((project, index) => {
          const copy = t.projects.items[project.id];

          return (
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
                    alt={copy.title}
                    className="projects__image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className="projects__info">
                <h3 className="projects__title">{copy.title}</h3>
                <p className="projects__tech">{project.tech}</p>
                <p className="projects__description">{copy.description}</p>

                <div className="projects__links">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      {t.projects.githubLabel}
                    </a>
                  )}
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      {copy.liveLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="projects__neblina">
        <h3 className="projects__neblina-heading">{t.projects.neblina.heading}</h3>
        <p className="projects__neblina-body">{t.projects.neblina.body}</p>
        <a
          href="https://neblina.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="projects__link"
        >
          {t.projects.neblina.link}
        </a>
      </div>
    </section>
  );
};

export default Projects;
