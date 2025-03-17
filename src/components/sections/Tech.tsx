import { motion } from "framer-motion";
import "./Tech.scss";

interface TechSkill {
  name: string;
  category: string;
  level?: string;
}

const technologies: TechSkill[] = [
  { name: "JavaScript", category: "language", level: "advanced" },
  { name: "TypeScript", category: "language", level: "intermediate" },
  { name: "React", category: "frontend", level: "advanced" },
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "Express.js", category: "backend", level: "intermediate" },
  { name: "HTML5", category: "frontend", level: "advanced" },
  { name: "CSS/SASS", category: "frontend", level: "advanced" },
  { name: "MySQL", category: "database", level: "intermediate" },
  { name: "REST APIs", category: "backend", level: "intermediate" },
  { name: "Git/GitHub", category: "tool", level: "intermediate" },
  { name: "Responsive Design", category: "frontend", level: "advanced" },
  { name: "UI/UX", category: "design", level: "intermediate" },
  { name: "Agile/Kanban", category: "methodology", level: "intermediate" },
  { name: "SQL", category: "database", level: "intermediate" },
  { name: "Google Analytics", category: "tool", level: "advanced" },
  { name: "SEO", category: "marketing", level: "advanced" },
];

const Tech = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
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
    <section className="tech" id="skills">
      <h2 className="section__heading">Technical Skills</h2>

      <div className="tech__intro">
        <p>
          With a strong foundation in full-stack development and a background in
          marketing and content management, I bring a unique perspective to
          technical projects. My cross-functional experience allows me to bridge
          the gap between technical implementation and business goals.
        </p>
      </div>

      <motion.div
        className="tech__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className={`tech__item tech__item--${tech.category} ${
              tech.level ? `tech__item--${tech.level}` : ""
            }`}
            variants={itemVariants}
          >
            <span className="tech__name">{tech.name}</span>
            <span className="tech__category">{tech.category}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="tech__categories">
        <div className="tech__category-group">
          <h3 className="tech__category-title">Frontend</h3>
          <p>
            Building responsive, accessible, and intuitive user interfaces using
            modern frameworks and best practices.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">Backend</h3>
          <p>
            Developing robust API endpoints, server logic, and database
            interactions to power applications.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">Development Tools</h3>
          <p>
            Utilizing industry-standard tools and methodologies for efficient
            collaboration and code quality.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">Marketing & Analytics</h3>
          <p>
            Leveraging my previous experience to incorporate data-driven
            insights and optimization strategies.
          </p>
        </div>
      </div>

      <div className="tech__learning">
        <h3>Currently Learning</h3>
        <div className="tech__learning-items">
          <span className="tech__learning-item">Next.js</span>
          <span className="tech__learning-item">React Native</span>
          <span className="tech__learning-item">Advanced TypeScript</span>
        </div>
      </div>
    </section>
  );
};

export default Tech;
