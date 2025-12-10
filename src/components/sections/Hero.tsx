import { motion, useAnimationControls } from "framer-motion";
import {
  ArrowRight,
  FileArrowDown,
  Code,
  Database,
  PaintBucket,
  Globe,
  FileHtml,
  DeviceMobile,
  FigmaLogo,
  PlugsConnected,
  Intersect,
  GitBranch,
  BracketsSquare,
  BracketsCurly,
  Bug,
  Coffee,
  Stack,
} from "@phosphor-icons/react";
import "./Hero.scss";

// Define core skills (these will be larger and more prominent)
const CORE_SKILLS = [0, 1, 2, 3];

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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: CORE_SKILLS.includes(i) ? 1.1 : 1,
      zIndex: CORE_SKILLS.includes(i) ? 5 : 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  const floatVariants = {
    animate: (i: number) => ({
      y: CORE_SKILLS.includes(i) ? [0, -6, 0] : [0, i % 2 === 0 ? -8 : -12, 0],
      transition: {
        duration: CORE_SKILLS.includes(i) ? 4 : i % 2 === 0 ? 3 : 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2,
      },
    }),
  };

  // Create animation controls for each skill
  const skillControls = Array(18)
    .fill(null)
    .map(() => useAnimationControls());

  const handleHover = (index: number) => {
    const MAX_ANIMATED_SKILLS = 10;

    // Scale up and add a little wobble to the hovered skill
    skillControls[index].start({
      scale: 1.15,
      rotate: [0, -3, 3, -2, 2, 0],
      zIndex: 10,
      transition: {
        scale: { duration: 0.3 },
        rotate: { duration: 0.5, ease: "easeInOut" },
      },
    });

    // Make core skills react to the hover
    CORE_SKILLS.forEach((coreIndex) => {
      if (coreIndex !== index) {
        const positionFactor = (coreIndex % 5) - 2;
        const distanceFactor = ((coreIndex + index) % 3) + 1;

        const xOffset = positionFactor * 6 * (distanceFactor / 2);
        const yOffset = positionFactor * -1 * 5 * (distanceFactor / 2);
        const rotateVal = positionFactor * 1;

        skillControls[coreIndex].start({
          x: xOffset,
          y: yOffset,
          rotate: rotateVal,
          opacity: 1,
          scale: 1.05,
          zIndex: 5,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 8,
          },
        });
      }
    });

    // Randomly select some non-core skills to animate
    const nonCoreSkills = Array.from(
      { length: skillControls.length },
      (_, i) => i
    ).filter((i) => i !== index && !CORE_SKILLS.includes(i));

    const skillsToAnimate = nonCoreSkills
      .sort(() => 0.5 - Math.random())
      .slice(0, MAX_ANIMATED_SKILLS - CORE_SKILLS.length);

    skillsToAnimate.forEach((i) => {
      const positionFactor = (i % 5) - 2;
      const distanceFactor = ((i + index) % 3) + 1;

      const xOffset = positionFactor * 12 * (distanceFactor / 2);
      const yOffset = positionFactor * -1 * 10 * (distanceFactor / 2);
      const rotateVal = positionFactor * 2;

      skillControls[i].start({
        x: xOffset,
        y: yOffset,
        rotate: rotateVal,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 8,
        },
      });
    });
  };

  const handleHoverEnd = () => {
    // Reset all skills to their original positions
    skillControls.forEach((control, i) => {
      control.start({
        x: 0,
        y: 0,
        scale: CORE_SKILLS.includes(i) ? 1.1 : 1,
        rotate: 0,
        zIndex: CORE_SKILLS.includes(i) ? 5 : 1,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 10,
          duration: 2,
        },
      });
    });
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
              <span className="text-gradient">Web Developer</span>
            </h1>

            <p className="hero__subtitle">
              I bridge marketing teams and developers, turning campaign ideas into production-ready web pages. 5+ years managing digital experiences for 100,000+ monthly visitors.
            </p>

            <div className="hero__buttons">
              <a
                href="/Resume_Gabriela_Barreira.pdf"
                download="Resume_Gabriela_Barreira.pdf"
                target="_blank"
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
            className="hero__skill-cloud"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Core Skill: React */}
            <motion.div
              className="hero__skill hero__skill--react hero__skill--core"
              variants={itemVariants}
              custom={0}
              animate={skillControls[0]}
              initial="visible"
              onHoverStart={() => handleHover(0)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={0}
                initial="animate"
              >
                <BracketsSquare size={24} weight="duotone" />
                <span>React</span>
              </motion.div>
            </motion.div>

            {/* Core Skill: JavaScript */}
            <motion.div
              className="hero__skill hero__skill--js hero__skill--core"
              variants={itemVariants}
              custom={1}
              animate={skillControls[1]}
              initial="visible"
              onHoverStart={() => handleHover(1)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={1}
                initial="animate"
              >
                <Code size={20} weight="duotone" />
                <span>JavaScript</span>
              </motion.div>
            </motion.div>

            {/* Core Skill: TypeScript */}
            <motion.div
              className="hero__skill hero__skill--ts hero__skill--core"
              variants={itemVariants}
              custom={2}
              animate={skillControls[2]}
              initial="visible"
              onHoverStart={() => handleHover(2)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={2}
                initial="animate"
              >
                <BracketsCurly size={20} weight="duotone" />
                <span>TypeScript</span>
              </motion.div>
            </motion.div>

            {/* Core Skill: Node.js */}
            <motion.div
              className="hero__skill hero__skill--node hero__skill--core"
              variants={itemVariants}
              custom={3}
              animate={skillControls[3]}
              initial="visible"
              onHoverStart={() => handleHover(3)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={3}
                initial="animate"
              >
                <Coffee size={20} weight="duotone" />
                <span>Node.js</span>
              </motion.div>
            </motion.div>

            {/* HTML */}
            <motion.div
              className="hero__skill hero__skill--html"
              variants={itemVariants}
              custom={4}
              animate={skillControls[4]}
              initial="visible"
              onHoverStart={() => handleHover(4)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={4}
                initial="animate"
              >
                <FileHtml size={20} weight="duotone" />
                <span>HTML5</span>
              </motion.div>
            </motion.div>

            {/* CSS & SASS */}
            <motion.div
              className="hero__skill hero__skill--sass"
              variants={itemVariants}
              custom={5}
              animate={skillControls[5]}
              initial="visible"
              onHoverStart={() => handleHover(5)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={5}
                initial="animate"
              >
                <PaintBucket size={20} weight="duotone" />
                <span>CSS/SCSS</span>
              </motion.div>
            </motion.div>

            {/* React Hooks */}
            <motion.div
              className="hero__skill hero__skill--hooks"
              variants={itemVariants}
              custom={6}
              animate={skillControls[6]}
              initial="visible"
              onHoverStart={() => handleHover(6)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={6}
                initial="animate"
              >
                <PlugsConnected size={20} weight="duotone" />
                <span>React Hooks</span>
              </motion.div>
            </motion.div>

            {/* REST API */}
            <motion.div
              className="hero__skill hero__skill--api"
              variants={itemVariants}
              custom={7}
              animate={skillControls[7]}
              initial="visible"
              onHoverStart={() => handleHover(7)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={7}
                initial="animate"
              >
                <Globe size={20} weight="duotone" />
                <span>REST API</span>
              </motion.div>
            </motion.div>

            {/* MySQL */}
            <motion.div
              className="hero__skill hero__skill--mysql"
              variants={itemVariants}
              custom={8}
              animate={skillControls[8]}
              initial="visible"
              onHoverStart={() => handleHover(8)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={8}
                initial="animate"
              >
                <Database size={20} weight="duotone" />
                <span>MySQL</span>
              </motion.div>
            </motion.div>

            {/* Git */}
            <motion.div
              className="hero__skill hero__skill--git"
              variants={itemVariants}
              custom={9}
              animate={skillControls[9]}
              initial="visible"
              onHoverStart={() => handleHover(9)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={9}
                initial="animate"
              >
                <GitBranch size={20} weight="duotone" />
                <span>Git/GitHub</span>
              </motion.div>
            </motion.div>

            {/* Responsive */}
            <motion.div
              className="hero__skill hero__skill--responsive"
              variants={itemVariants}
              custom={10}
              animate={skillControls[10]}
              initial="visible"
              onHoverStart={() => handleHover(10)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={10}
                initial="animate"
              >
                <DeviceMobile size={20} weight="duotone" />
                <span>Responsive</span>
              </motion.div>
            </motion.div>

            {/* Context API */}
            <motion.div
              className="hero__skill hero__skill--context"
              variants={itemVariants}
              custom={11}
              animate={skillControls[11]}
              initial="visible"
              onHoverStart={() => handleHover(11)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={11}
                initial="animate"
              >
                <Intersect size={20} weight="duotone" />
                <span>Context API</span>
              </motion.div>
            </motion.div>

            {/* WordPress */}
            <motion.div
              className="hero__skill hero__skill--wordpress"
              variants={itemVariants}
              custom={12}
              animate={skillControls[12]}
              initial="visible"
              onHoverStart={() => handleHover(12)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={12}
                initial="animate"
              >
                <Globe size={20} weight="duotone" />
                <span>WordPress</span>
              </motion.div>
            </motion.div>

            {/* Agile */}
            <motion.div
              className="hero__skill hero__skill--agile"
              variants={itemVariants}
              custom={13}
              animate={skillControls[13]}
              initial="visible"
              onHoverStart={() => handleHover(13)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={13}
                initial="animate"
              >
                <PlugsConnected size={20} weight="duotone" />
                <span>Agile/Jira</span>
              </motion.div>
            </motion.div>

            {/* BEM */}
            <motion.div
              className="hero__skill hero__skill--bem"
              variants={itemVariants}
              custom={14}
              animate={skillControls[14]}
              initial="visible"
              onHoverStart={() => handleHover(14)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={14}
                initial="animate"
              >
                <PaintBucket size={20} weight="duotone" />
                <span>SASS/BEM</span>
              </motion.div>
            </motion.div>

            {/* Figma */}
            <motion.div
              className="hero__skill hero__skill--figma"
              variants={itemVariants}
              custom={15}
              animate={skillControls[15]}
              initial="visible"
              onHoverStart={() => handleHover(15)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={15}
                initial="animate"
              >
                <FigmaLogo size={20} weight="duotone" />
                <span>Figma</span>
              </motion.div>
            </motion.div>

            {/* UI Components */}
            <motion.div
              className="hero__skill hero__skill--components"
              variants={itemVariants}
              custom={16}
              animate={skillControls[16]}
              initial="visible"
              onHoverStart={() => handleHover(16)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={16}
                initial="animate"
              >
                <Stack size={20} weight="duotone" />
                <span>UI Components</span>
              </motion.div>
            </motion.div>

            {/* Testing */}
            <motion.div
              className="hero__skill hero__skill--testing"
              variants={itemVariants}
              custom={17}
              animate={skillControls[17]}
              initial="visible"
              onHoverStart={() => handleHover(17)}
              onHoverEnd={handleHoverEnd}
              role="presentation"
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={17}
                initial="animate"
              >
                <Bug size={20} weight="duotone" />
                <span>Testing</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
