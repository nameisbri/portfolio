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
  Robot,
  Train,
  Check,
  Sparkle,
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
    {
      name: "WordPress",
      category: "platform",
      icon: <Globe weight="duotone" />,
    },
    {
      name: "Claude",
      category: "ai",
      icon: <Lightbulb weight="duotone" />,
    },
    {
      name: "Cursor",
      category: "ai",
      icon: <Code weight="duotone" />,
    },
    {
      name: "ChatGPT",
      category: "ai",
      icon: <Lightbulb weight="duotone" />,
    },
    {
      name: "Google Analytics",
      category: "analytics",
      icon: <ChartBar weight="duotone" />,
    },
    {
      name: "Figma",
      category: "design",
      icon: <PaintBrush weight="duotone" />,
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
          I work across the stack and across teams. My toolkit spans development, content management, design coordination, and analytics. I use AI tools daily to ship faster.
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
          <h3 className="tech__category-title">Development</h3>
          <p>
            JavaScript, React, Rails, HTML/CSS, Node.js, Express, MySQL. I build full-stack web applications and fix bugs in production codebases.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">Platforms & Tools</h3>
          <p>
            WordPress, Google Analytics, Figma. I manage content systems, analyze traffic data, and coordinate with designers.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">AI Workflow</h3>
          <p>
            Claude, Cursor, ChatGPT. I use AI tools for code review, debugging, and content strategy. They're part of my daily workflow, not buzzwords.
          </p>
        </div>
      </div>

      <motion.div
        className="tech__learning"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3>Currently Exploring</h3>
        <p className="tech__learning-text">
          Tools and techniques I'm actively working with:
        </p>
        <div className="tech__learning-items">
          <motion.span className="tech__learning-item">
            <Robot weight="duotone" size={20} />
            AI-Assisted Development
          </motion.span>
          <motion.span className="tech__learning-item">
            <Train weight="duotone" size={20} />
            Rails (deeper backend work)
          </motion.span>
          <motion.span className="tech__learning-item">
            <Check weight="duotone" size={20} />
            Accessibility Testing
          </motion.span>
          <motion.span className="tech__learning-item">
            <Sparkle weight="duotone" size={20} />
            GEO (Generative Engine Optimization)
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default Tech;
