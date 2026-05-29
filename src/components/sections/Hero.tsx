import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import "./Hero.scss";

const Hero = () => {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.04 },
    },
  };

  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      };

  const portrait = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease } },
      };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero__inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero__lead">
          <motion.p className="hero__eyebrow" variants={item}>
            <span className="hero__status-row">
              <span className="hero__status" aria-hidden="true" />
              <span className="hero__status-text">{t.hero.status}</span>
            </span>
            <span className="hero__kicker">{t.hero.kicker}</span>
          </motion.p>

          <motion.h1 id="hero-title" className="hero__title" variants={item}>
            {t.hero.titleBefore}{" "}
            <span className="hero__mark">{t.hero.titleMark}</span>{" "}
            {t.hero.titleAfter}
          </motion.h1>

          <motion.p className="hero__subtitle" variants={item}>
            {t.hero.subtitle}
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a href="#projects" className="button button--primary">
              <span>{t.hero.seeWork}</span>
            </a>
            <a href="#contact" className="hero__ghost">
              {t.hero.getInTouch}
              <span className="hero__ghost-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div className="hero__portrait" variants={portrait}>
          <div className="hero__portrait-frame">
            <img
              src="/headshot.jpg"
              alt={t.hero.portraitAlt}
              width="512"
              height="512"
              className="hero__portrait-img"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
