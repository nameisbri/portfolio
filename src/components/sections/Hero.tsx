import { motion } from "framer-motion";
import { ArrowRight, FileArrowDown } from "@phosphor-icons/react";
import "./Hero.scss";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <motion.div
          className="hero__left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero__content">
            <span className="hero__intro">Hi, I'm Gabriela</span>
            <h1 className="hero__title">
              Software engineer delivering{" "}
              <span className="text-gradient">impactful solutions</span>
            </h1>

            <p className="hero__subtitle">
              I transform complex problems into elegant, user-centric
              applications with a focus on accessibility and performance. My
              background in marketing gives me a unique perspective on user
              needs.
            </p>

            <div className="hero__buttons">
              <a
                href="/Gabriela_Barreira_Resume.pdf"
                download
                className="button button--primary hero__resume-btn"
              >
                <FileArrowDown weight="bold" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero__links">
              <a href="#projects" className="hero__link">
                <motion.span initial={{ x: -5 }} whileHover={{ x: 0 }}>
                  View my projects
                </motion.span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight weight="bold" />
                </motion.div>
              </a>
              <a href="#contact" className="hero__link">
                <motion.span initial={{ x: -5 }} whileHover={{ x: 0 }}>
                  Get in touch
                </motion.span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight weight="bold" />
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="hero__right">
          <motion.div
            className="hero__tag-cloud"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="hero__tag hero__tag--react"
              variants={itemVariants}
            >
              React
            </motion.span>
            <motion.span
              className="hero__tag hero__tag--js"
              variants={itemVariants}
            >
              JavaScript
            </motion.span>
            <motion.span
              className="hero__tag hero__tag--ts"
              variants={itemVariants}
            >
              TypeScript
            </motion.span>
            <motion.span
              className="hero__tag hero__tag--node"
              variants={itemVariants}
            >
              Node.js
            </motion.span>
            <motion.span
              className="hero__tag hero__tag--css"
              variants={itemVariants}
            >
              CSS
            </motion.span>
            <motion.span
              className="hero__tag hero__tag--sass"
              variants={itemVariants}
            >
              SASS
            </motion.span>
            <motion.span
              className="hero__tag hero__tag--mysql"
              variants={itemVariants}
            >
              MySQL
            </motion.span>
            <motion.span
              className="hero__tag hero__tag--express"
              variants={itemVariants}
            >
              Express.js
            </motion.span>
            <motion.span
              className="hero__tag hero__tag--html"
              variants={itemVariants}
            >
              HTML
            </motion.span>
            <motion.span
              className="hero__tag hero__tag--ux"
              variants={itemVariants}
            >
              UI/UX
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
