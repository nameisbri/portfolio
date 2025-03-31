import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  BracketsSquare,
  PaintBrush,
  Lightning,
  ChartBar,
  Gear,
  Lightbulb,
  TreeStructure,
  BracketsCurly,
  DeviceMobile,
  BookOpen,
  Anchor,
} from "@phosphor-icons/react";
import "./Tech.scss";

interface TechSkill {
  name: string;
  category: string;
  icon: JSX.Element;
}

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  const technologies: TechSkill[] = [
    {
      name: "JavaScript",
      category: "language",
      icon: <Code weight="duotone" />,
    },
    {
      name: "TypeScript",
      category: "language",
      icon: <BracketsCurly weight="duotone" />,
    },
    {
      name: "React",
      category: "frontend",
      icon: <BracketsSquare weight="duotone" />,
    },
    {
      name: "Node.js",
      category: "backend",
      icon: <TreeStructure weight="duotone" />,
    },
    {
      name: "Express.js",
      category: "backend",
      icon: <Lightning weight="duotone" />,
    },
    {
      name: "HTML5",
      category: "frontend",
      icon: <Code weight="duotone" />,
    },
    {
      name: "CSS/SASS",
      category: "frontend",
      icon: <PaintBrush weight="duotone" />,
    },
    {
      name: "MySQL",
      category: "database",
      icon: <Database weight="duotone" />,
    },
    {
      name: "REST APIs",
      category: "backend",
      icon: <Globe weight="duotone" />,
    },
    {
      name: "Git/GitHub",
      category: "tool",
      icon: <Gear weight="duotone" />,
    },
    {
      name: "Responsive Design",
      category: "frontend",
      icon: <DeviceMobile weight="duotone" />,
    },
    {
      name: "UI/UX",
      category: "design",
      icon: <Lightbulb weight="duotone" />,
    },
    {
      name: "Agile/Kanban",
      category: "methodology",
      icon: <TreeStructure weight="duotone" />,
    },
    {
      name: "SQL",
      category: "database",
      icon: <Database weight="duotone" />,
    },
    {
      name: "TDD/Testing",
      category: "methodology",
      icon: <ChartBar weight="duotone" />,
    },
    {
      name: "RESTful Services",
      category: "backend",
      icon: <Globe weight="duotone" />,
    },
  ];

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
    <section className="tech" id="skills" ref={ref}>
      <h2 className="section__heading">Technical Skills</h2>

      <div className="tech__intro">
        <p>
          My technical skills have been developed with intention and curiosity.
          Coming to software development after years in another field gives me a
          unique appreciation for both the possibilities and limitations of
          technology. I approach coding not just as a technical exercise, but as
          a craft that requires empathy, communication, and constant learning.
        </p>
      </div>

      <motion.div
        className="tech__grid"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className={`tech__item tech__item--${tech.category}`}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="tech__icon">{tech.icon}</div>
            <span className="tech__name">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="tech__categories">
        <div className="tech__category-group">
          <h3 className="tech__category-title">Development Skills</h3>
          <p>
            Full-stack capabilities with strong frontend and backend development
            skills, focusing on creating responsive, efficient web applications.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">Professional Approach</h3>
          <p>
            Committed to best practices including test-driven development, agile
            methodologies, and continuous learning in software engineering.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">Unique Value Proposition</h3>
          <p>
            Bridging technical expertise with marketing insights to deliver
            solutions that are not just functional, but strategically impactful.
          </p>
        </div>
      </div>

      <motion.div
        className="tech__learning"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3>Continuous Learning</h3>
        <p className="tech__learning-text">
          Actively expanding my skill set to stay at the forefront of web
          development:
        </p>
        <div className="tech__learning-items">
          <motion.span className="tech__learning-item">
            <BracketsCurly weight="duotone" size={20} />
            Advanced TypeScript
          </motion.span>
          <motion.span className="tech__learning-item">
            <Anchor weight="duotone" size={20} />
            React Hooks
          </motion.span>
          <motion.span className="tech__learning-item">
            <BookOpen weight="duotone" size={20} />
            Agile Development
          </motion.span>
          <motion.span className="tech__learning-item">
            <DeviceMobile weight="duotone" size={20} />
            Angular Concepts
          </motion.span>
        </div>
        <p className="tech__learning-approach">
          Combining structured learning with hands-on projects to rapidly
          develop and apply cutting-edge technical skills.
        </p>
      </motion.div>
    </section>
  );
};

export default Tech;
