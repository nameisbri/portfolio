import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Tech.scss";

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <section className="tech" id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section__heading">Skills</h2>

        <div className="tech__content">
          <div className="tech__skills">
            <div className="tech__group">
              <h3 className="tech__group-title">Development</h3>
              <p className="tech__group-list">
                React Native, React, TypeScript, JavaScript, Node.js, Express, MySQL, SCSS, WordPress, Responsive Design
              </p>
            </div>

            <div className="tech__group">
              <h3 className="tech__group-title">Design</h3>
              <p className="tech__group-list">
                Figma, Product Design, UX/UI Design, Design Systems, Prototyping
              </p>
            </div>

            <div className="tech__group">
              <h3 className="tech__group-title">Tools & Workflow</h3>
              <p className="tech__group-list">
                Git, Claude, Cursor, ChatGPT, Google Analytics, Agile, Jira
              </p>
            </div>
          </div>

          <div className="tech__about">
            <div className="tech__about-block">
              <h3 className="tech__about-title">What I Build</h3>
              <p>
                Mobile apps (iOS & Android) with React Native, responsive websites, and full-stack web applications. From initial design in Figma through deployment.
              </p>
            </div>

            <div className="tech__about-block">
              <h3 className="tech__about-title">How I Work</h3>
              <p>
                Design and code under one roof. I start in Figma, build in React/React Native, and use AI-assisted tools (Claude, Cursor) to move faster without cutting corners.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tech;
