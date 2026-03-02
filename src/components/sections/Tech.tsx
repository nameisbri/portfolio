import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BracketsSquare,
  PaintBrush,
  Lightbulb,
  TreeStructure,
  BracketsCurly,
  DeviceMobile,
  Robot,
  Globe,
  Code,
  ChartBar,
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
      name: "React Native",
      category: "mobile",
      icon: <DeviceMobile weight="duotone" />,
    },
    {
      name: "React",
      category: "frontend",
      icon: <BracketsSquare weight="duotone" />,
    },
    {
      name: "TypeScript",
      category: "language",
      icon: <BracketsCurly weight="duotone" />,
    },
    {
      name: "Product Design",
      category: "design",
      icon: <PaintBrush weight="duotone" />,
    },
    {
      name: "UX/UI Design",
      category: "design",
      icon: <Lightbulb weight="duotone" />,
    },
    {
      name: "Node.js",
      category: "backend",
      icon: <TreeStructure weight="duotone" />,
    },
    {
      name: "Responsive Design",
      category: "frontend",
      icon: <DeviceMobile weight="duotone" />,
    },
    {
      name: "AI-Enhanced Development",
      category: "ai-tools",
      icon: <Robot weight="duotone" />,
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
          Design and development across mobile, web, and full-stack. I use AI-assisted tools in my workflow and handle projects from concept through deployment.
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
              scale: 1.08,
              y: -4,
              transition: { duration: 0.2 },
            }}
          >
            <div className="tech__icon-wrapper">
              <div className="tech__icon">{tech.icon}</div>
            </div>
            <span className="tech__name">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="tech__categories">
        <div className="tech__category-group">
          <h3 className="tech__category-title">What I Build</h3>
          <p>
            Mobile apps (iOS & Android) with React Native, responsive websites, and full-stack web applications. From initial design in Figma through deployment.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">How I Work</h3>
          <p>
            Design and code under one roof. I start in Figma, build in React/React Native, and use AI-assisted tools (Claude, Cursor) to move faster without cutting corners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tech;
