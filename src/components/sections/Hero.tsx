import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="hero__title">
          I design and build{" "}
          <span className="hero__accent">mobile apps & web products</span>
        </h1>

        <p className="hero__subtitle">
          Product designer & developer, 8+ years. From Figma to React Native to deployment.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="button button--primary">
            <span>See my work</span>
          </a>
          <a
            href="/Resume_Gabriela_Barreira.pdf"
            download="Resume_Gabriela_Barreira.pdf"
            target="_blank"
            className="hero__text-link"
          >
            <span>Download resume</span>
            <ArrowRight weight="bold" size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
