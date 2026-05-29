import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import "./Tech.scss";

const GROUPS = [
  { key: "development", accent: "accent" },
  { key: "design", accent: "secondary" },
  { key: "tools", accent: "tertiary" },
] as const;

const Tech = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section className="tech" id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section__heading">{t.tech.heading}</h2>

        <div className="tech__groups">
          {GROUPS.map(({ key, accent }) => {
            const group = t.tech.groups[key];
            const skills = group.list.split(", ");

            return (
              <div
                key={key}
                className={`tech__group tech__group--${accent}`}
              >
                <h3 className="tech__group-title">
                  <span className="tech__group-dot" aria-hidden="true" />
                  {group.title}
                </h3>
                <ul className="tech__pills">
                  {skills.map((skill) => (
                    <li key={skill} className="tech__pill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="tech__about">
          <div className="tech__about-block">
            <span className="tech__about-index" aria-hidden="true">
              01
            </span>
            <h3 className="tech__about-title">{t.tech.whatTitle}</h3>
            <p>{t.tech.whatBody}</p>
          </div>

          <div className="tech__about-block">
            <span className="tech__about-index" aria-hidden="true">
              02
            </span>
            <h3 className="tech__about-title">{t.tech.howTitle}</h3>
            <p>{t.tech.howBody}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tech;
