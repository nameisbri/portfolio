import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import "./Tech.scss";

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

        <div className="tech__content">
          <div className="tech__skills">
            <div className="tech__group">
              <h3 className="tech__group-title">{t.tech.groups.development.title}</h3>
              <p className="tech__group-list">{t.tech.groups.development.list}</p>
            </div>

            <div className="tech__group">
              <h3 className="tech__group-title">{t.tech.groups.design.title}</h3>
              <p className="tech__group-list">{t.tech.groups.design.list}</p>
            </div>

            <div className="tech__group">
              <h3 className="tech__group-title">{t.tech.groups.tools.title}</h3>
              <p className="tech__group-list">{t.tech.groups.tools.list}</p>
            </div>
          </div>

          <div className="tech__about">
            <div className="tech__about-block">
              <h3 className="tech__about-title">{t.tech.whatTitle}</h3>
              <p>{t.tech.whatBody}</p>
            </div>

            <div className="tech__about-block">
              <h3 className="tech__about-title">{t.tech.howTitle}</h3>
              <p>{t.tech.howBody}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tech;
