import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import "./Hero.scss";

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="hero__title">
          {t.hero.titleLead}{" "}
          <span className="hero__accent">{t.hero.titleAccent}</span>
        </h1>

        <p className="hero__subtitle">{t.hero.subtitle}</p>

        <div className="hero__buttons">
          <a href="#projects" className="button button--primary">
            <span>{t.hero.seeWork}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
