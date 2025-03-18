import { motion, useAnimationControls } from "framer-motion";
import {
  ArrowRight,
  FileArrowDown,
  Code,
  Database,
  PaintBucket,
  Layout,
  GitBranch,
  ChartLine,
  FileHtml,
  Globe,
  Coffee,
  LightbulbFilament,
  BracketsCurly,
  Stack,
  DeviceMobile,
  FigmaLogo,
  BracketsSquare,
  Cloud,
} from "@phosphor-icons/react";
import "./Hero.scss";

// Define core skills that should always be prominent
const CORE_SKILLS = [0, 1, 2, 3]; // React, JavaScript, TypeScript, Node.js

const Hero = () => {
  // Original animation variants
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
      scale: CORE_SKILLS.includes(i) ? 1.1 : 1, // Make core skills slightly larger by default
      zIndex: CORE_SKILLS.includes(i) ? 5 : 1, // Give core skills higher z-index
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  const floatVariants = {
    animate: (i: number) => ({
      y: CORE_SKILLS.includes(i)
        ? [0, -6, 0] // Smaller float animation for core skills to keep them more stable
        : [0, i % 2 === 0 ? -8 : -12, 0],
      transition: {
        duration: CORE_SKILLS.includes(i) ? 4 : i % 2 === 0 ? 3 : 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2,
      },
    }),
  };

  // Create individual animation controls for each skill bubble
  const skillControls = Array(19)
    .fill(null)
    .map(() => useAnimationControls());

  // Function to handle hover effect with repulsion
  const handleHover = (index: number) => {
    // Calculate repulsion for each skill based on its position relative to the hovered skill
    skillControls.forEach((control, i) => {
      if (i === index) {
        // Scale up the hovered element and bring it to the front with a wiggle
        control.start({
          scale: 1.15,
          rotate: [0, -3, 3, -2, 2, 0],
          zIndex: 10, // Higher z-index to bring to front
          transition: {
            scale: { duration: 0.3 },
            rotate: { duration: 0.5, ease: "easeInOut" },
          },
        });
      } else if (CORE_SKILLS.includes(i)) {
        // For core skills, apply minimal movement to keep them visible
        const positionFactor = (i % 5) - 2;
        const distanceFactor = ((i + index) % 3) + 1;

        // Apply more subtle movement to core skills
        const xOffset = positionFactor * 6 * (distanceFactor / 2);
        const yOffset = positionFactor * -1 * 5 * (distanceFactor / 2);
        const rotateVal = positionFactor * 1;

        control.start({
          x: xOffset,
          y: yOffset,
          rotate: rotateVal,
          // Maintain high visibility and scale for core skills
          opacity: 1,
          scale: 1.05,
          zIndex: 5,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 8,
          },
        });
      } else {
        // For other elements, calculate a repulsion effect
        // Create a more pronounced and consistent repulsion effect
        // Calculate direction based on relative position to create a radial push

        // Determine the relative position (simplistic approach)
        const positionFactor = (i % 5) - 2; // Creates values -2, -1, 0, 1, 2
        const distanceFactor = ((i + index) % 3) + 1; // Creates values 1, 2, 3

        // Create a more dynamic repulsion with slight rotation
        const xOffset = positionFactor * 12 * (distanceFactor / 2);
        const yOffset = positionFactor * -1 * 10 * (distanceFactor / 2);
        const rotateVal = positionFactor * 2;

        control.start({
          x: xOffset,
          y: yOffset,
          rotate: rotateVal,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 8,
          },
        });
      }
    });
  };

  // Function to handle hover end and return to original positions
  const handleHoverEnd = () => {
    // Return all skills to their original positions with a gentle bounce
    skillControls.forEach((control, i) => {
      control.start({
        x: 0,
        y: 0,
        // Return core skills to their slightly larger size
        scale: CORE_SKILLS.includes(i) ? 1.1 : 1,
        rotate: 0,
        // Maintain higher z-index for core skills
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
            {/* Core Skills */}
            <motion.div
              className="hero__skill hero__skill--react hero__skill--core"
              variants={itemVariants}
              custom={0}
              animate={skillControls[0]}
              initial="visible"
              onHoverStart={() => handleHover(0)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={0}
                initial="animate"
              >
                <BracketsCurly size={24} weight="duotone" />
                <span>React</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--js hero__skill--core"
              variants={itemVariants}
              custom={1}
              animate={skillControls[1]}
              initial="visible"
              onHoverStart={() => handleHover(1)}
              onHoverEnd={handleHoverEnd}
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

            <motion.div
              className="hero__skill hero__skill--ts hero__skill--core"
              variants={itemVariants}
              custom={2}
              animate={skillControls[2]}
              initial="visible"
              onHoverStart={() => handleHover(2)}
              onHoverEnd={handleHoverEnd}
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

            {/* Backend Skills */}
            <motion.div
              className="hero__skill hero__skill--node hero__skill--core"
              variants={itemVariants}
              custom={3}
              animate={skillControls[3]}
              initial="visible"
              onHoverStart={() => handleHover(3)}
              onHoverEnd={handleHoverEnd}
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

            <motion.div
              className="hero__skill hero__skill--express"
              variants={itemVariants}
              custom={4}
              animate={skillControls[4]}
              initial="visible"
              onHoverStart={() => handleHover(4)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={4}
                initial="animate"
              >
                <GitBranch size={20} weight="duotone" />
                <span>Express.js</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--mysql"
              variants={itemVariants}
              custom={5}
              animate={skillControls[5]}
              initial="visible"
              onHoverStart={() => handleHover(5)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={5}
                initial="animate"
              >
                <Database size={20} weight="duotone" />
                <span>MySQL</span>
              </motion.div>
            </motion.div>

            {/* Frontend Skills */}
            <motion.div
              className="hero__skill hero__skill--css"
              variants={itemVariants}
              custom={6}
              animate={skillControls[6]}
              initial="visible"
              onHoverStart={() => handleHover(6)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={6}
                initial="animate"
              >
                <PaintBucket size={20} weight="duotone" />
                <span>CSS</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--sass"
              variants={itemVariants}
              custom={7}
              animate={skillControls[7]}
              initial="visible"
              onHoverStart={() => handleHover(7)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={7}
                initial="animate"
              >
                <PaintBucket size={20} weight="duotone" />
                <span>SASS</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--html"
              variants={itemVariants}
              custom={8}
              animate={skillControls[8]}
              initial="visible"
              onHoverStart={() => handleHover(8)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={8}
                initial="animate"
              >
                <FileHtml size={20} weight="duotone" />
                <span>HTML</span>
              </motion.div>
            </motion.div>

            {/* Design/UX Skills */}
            <motion.div
              className="hero__skill hero__skill--ux"
              variants={itemVariants}
              custom={9}
              animate={skillControls[9]}
              initial="visible"
              onHoverStart={() => handleHover(9)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={9}
                initial="animate"
              >
                <Layout size={20} weight="duotone" />
                <span>UI/UX</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--figma"
              variants={itemVariants}
              custom={10}
              animate={skillControls[10]}
              initial="visible"
              onHoverStart={() => handleHover(10)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={10}
                initial="animate"
              >
                <FigmaLogo size={20} weight="duotone" />
                <span>Figma</span>
              </motion.div>
            </motion.div>

            {/* Marketing Skills */}
            <motion.div
              className="hero__skill hero__skill--analytics"
              variants={itemVariants}
              custom={11}
              animate={skillControls[11]}
              initial="visible"
              onHoverStart={() => handleHover(11)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={11}
                initial="animate"
              >
                <ChartLine size={20} weight="duotone" />
                <span>Analytics</span>
              </motion.div>
            </motion.div>

            {/* Additional Tech Skills */}
            <motion.div
              className="hero__skill hero__skill--mobile"
              variants={itemVariants}
              custom={13}
              animate={skillControls[13]}
              initial="visible"
              onHoverStart={() => handleHover(13)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={13}
                initial="animate"
              >
                <DeviceMobile size={20} weight="duotone" />
                <span>Mobile</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--cloud"
              variants={itemVariants}
              custom={14}
              animate={skillControls[14]}
              initial="visible"
              onHoverStart={() => handleHover(14)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={14}
                initial="animate"
              >
                <Cloud size={20} weight="duotone" />
                <span>Cloud</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--api"
              variants={itemVariants}
              custom={15}
              animate={skillControls[15]}
              initial="visible"
              onHoverStart={() => handleHover(15)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={15}
                initial="animate"
              >
                <BracketsSquare size={20} weight="duotone" />
                <span>REST API</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--stack"
              variants={itemVariants}
              custom={16}
              animate={skillControls[16]}
              initial="visible"
              onHoverStart={() => handleHover(16)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={16}
                initial="animate"
              >
                <Stack size={20} weight="duotone" />
                <span>Full Stack</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--creative"
              variants={itemVariants}
              custom={17}
              animate={skillControls[17]}
              initial="visible"
              onHoverStart={() => handleHover(17)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={17}
                initial="animate"
              >
                <LightbulbFilament size={20} weight="duotone" />
                <span>Creative</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero__skill hero__skill--global"
              variants={itemVariants}
              custom={18}
              animate={skillControls[18]}
              initial="visible"
              onHoverStart={() => handleHover(18)}
              onHoverEnd={handleHoverEnd}
            >
              <motion.div
                className="hero__skill-inner"
                variants={floatVariants}
                custom={18}
                initial="animate"
              >
                <Globe size={20} weight="duotone" />
                <span>Global</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
