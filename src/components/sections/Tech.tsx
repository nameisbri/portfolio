import { motion } from "framer-motion";
import "./Tech.scss";

const technologies = [
  { name: "JavaScript", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS/SASS", category: "frontend" },
  { name: "MySQL", category: "database" },
  { name: "Git/GitHub", category: "tool" },
  { name: "Agile", category: "methodology" },
  { name: "TypeScript", category: "language" },
];

const Tech = () => {
  return (
    <section className="tech">
      <h2 className="section__heading">Technical Skills</h2>

      <motion.div
        className="tech__grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`tech__item tech__item--${tech.category}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="tech__name">{tech.name}</span>
            <span className="tech__category">{tech.category}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="tech__info">
        <p>
          With a strong foundation in both front-end and back-end technologies,
          I build seamless, efficient applications with user experience at the
          core.
        </p>
      </div>
    </section>
  );
};

export default Tech;
