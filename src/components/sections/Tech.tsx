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
  Brain,
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
      name: "Google Analytics",
      category: "tool",
      icon: <ChartBar weight="duotone" />,
    },
    {
      name: "SEO",
      category: "marketing",
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
          With a strong foundation in full-stack development and a background in
          marketing and content management, I bring a unique perspective to
          technical projects. My cross-functional experience allows me to bridge
          the gap between technical implementation and business goals.
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

      <motion.div
        className="tech__learning"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3>Currently Learning</h3>
        <div className="tech__learning-items">
          <motion.span className="tech__learning-item">
            <BracketsCurly weight="duotone" size={20} />
            Advanced TypeScript
          </motion.span>
          <motion.span className="tech__learning-item">
            <Anchor weight="duotone" size={20} />
            Advanced React Hooks
          </motion.span>
          <motion.span className="tech__learning-item">
            <DeviceMobile weight="duotone" size={20} />
            Formik
          </motion.span>
          <motion.span className="tech__learning-item">
            <BookOpen weight="duotone" size={20} />
            Grokking Algorithms
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default Tech;
