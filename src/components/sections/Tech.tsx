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
          I bring together product design, development, and modern AI-enhanced workflows to deliver complete digital solutions. Whether you need an iOS app, a website, or a full product from concept to launch, I have the expertise to make it happen efficiently and beautifully.
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
          <h3 className="tech__category-title">What I Build</h3>
          <p>
            iOS apps, responsive websites, and full-stack web applications. I handle everything from the initial design to final deployment, ensuring your product works beautifully across all devices.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">How I Work</h3>
          <p>
            I combine design thinking with technical expertise to create products that look great and work seamlessly. Every project includes thoughtful UX/UI design, clean code, and attention to detail.
          </p>
        </div>

        <div className="tech__category-group">
          <h3 className="tech__category-title">Why It's Efficient</h3>
          <p>
            I leverage modern AI-assisted development tools and workflows to deliver high-quality results faster. This means you get your product sooner without compromising on quality or design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tech;
