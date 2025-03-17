import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero__title">
          Gabriela Barreira
          <span className="hero__subtitle">Software Developer</span>
        </h1>

        <p className="hero__description">
          Bridging marketing insights with technical expertise to create
          impactful, user-centric solutions. Specialized in full-stack
          development with a focus on health tech and meaningful projects.
        </p>

        <div className="hero__cta">
          <button className="button button--primary">View Projects</button>
          <button className="button button--secondary">Download Resume</button>
        </div>
      </motion.div>

      <motion.div
        className="hero__visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="hero__accent">
          <Star size={32} weight="fill" className="hero__star" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
