import { motion, useAnimationControls } from "framer-motion";
import {
  ArrowRight,
  PaintBucket,
  Globe,
  DeviceMobile,
  FigmaLogo,
  PlugsConnected,
  BracketsSquare,
  BracketsCurly,
  Stack,
  Lightning,
} from "@phosphor-icons/react";
import "./Hero.scss";

// Define core skills (these will be larger and more prominent)
// React Native, Product Design, UX/UI, AI-Enhanced Development
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
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: CORE_SKILLS.includes(i) ? 1.1 : 1,
      zIndex: CORE_SKILLS.includes(i) ? 5 : 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: i * 0.05,
      },
    }),
  };

  const floatVariants = {
    animate: (i: number) => ({
      y: CORE_SKILLS.includes(i) ? [0, -8, 0] : [0, i % 2 === 0 ? -6 : -10, 0],
      rotate: CORE_SKILLS.includes(i) ? [0, 2, -2, 0] : [0, 1, -1, 0],
      transition: {
        duration: CORE_SKILLS.includes(i) ? 4 : i % 2 === 0 ? 3.5 : 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2,
      },
    }),
  };

  // Create animation controls for each skill (hooks must not be called in loops)
  const control0 = useAnimationControls();
  const control1 = useAnimationControls();
  const control2 = useAnimationControls();
  const control3 = useAnimationControls();
  const control4 = useAnimationControls();
  const control5 = useAnimationControls();
  const control6 = useAnimationControls();
  const control7 = useAnimationControls();
  const control8 = useAnimationControls();
  const control9 = useAnimationControls();
  const control10 = useAnimationControls();
  const control11 = useAnimationControls();
  const control12 = useAnimationControls();
  const control13 = useAnimationControls();
  const control14 = useAnimationControls();
  const control15 = useAnimationControls();

  const skillControls = [
    control0,
    control1,
    control2,
    control3,
    control4,
    control5,
    control6,
    control7,
    control8,
    control9,
    control10,
    control11,
    control12,
    control13,
    control14,
    control15,
  ];

  const handleHover = (index: number) => {
    const MAX_ANIMATED_SKILLS = 12;

    // Scale up and add a bounce animation to the hovered skill
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="hero__content">
            <h1 className="hero__title">
              From Idea to App Store in{" "}
              <span className="text-gradient">Weeks, Not Months</span>
            </h1>

            <p className="hero__subtitle">
              I build high-performance mobile apps and conversion-driven websites for founders who need to move fast. By combining Product Design with AI-Accelerated Development, I deliver agency-grade results at startup speed.
            </p>

            <div className="hero__buttons">
              <a
                href="#contact"
                className="button button--primary hero__cta-btn"
              >
                <span>Start Your Project</span>
                <ArrowRight weight="bold" />
              </a>
              <a
                href="#projects"
                className="button button--secondary hero__view-work-btn"
              >
                <span>View My Work</span>
                <ArrowRight weight="bold" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="hero__right">
          <motion.div
            className="hero__skill-cloud hero__skill-cloud--simplified"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Core Skill: React Native */}
            <motion.div
              className="hero__skill hero__skill--react-native hero__skill--core"
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
                <DeviceMobile size={24} weight="duotone" />
                <span>Mobile Apps</span>
              </motion.div>
            </motion.div>

            {/* Core Skill: Product Design */}
            <motion.div
              className="hero__skill hero__skill--product-design hero__skill--core"
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
                <PaintBucket size={24} weight="duotone" />
                <span>Product Design</span>
              </motion.div>
            </motion.div>

            {/* Core Skill: UX/UI */}
            <motion.div
              className="hero__skill hero__skill--ux-ui hero__skill--core"
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
                <FigmaLogo size={24} weight="duotone" />
                <span>UX/UI Design</span>
              </motion.div>
            </motion.div>

            {/* Core Skill: AI-Enhanced */}
            <motion.div
              className="hero__skill hero__skill--ai-enhanced hero__skill--core"
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
                <PlugsConnected size={24} weight="duotone" />
                <span>AI-Enhanced</span>
              </motion.div>
            </motion.div>

            {/* Websites */}
            <motion.div
              className="hero__skill hero__skill--websites"
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
                <Globe size={20} weight="duotone" />
                <span>Websites</span>
              </motion.div>
            </motion.div>

            {/* React */}
            <motion.div
              className="hero__skill hero__skill--react"
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
                <BracketsSquare size={20} weight="duotone" />
                <span>React</span>
              </motion.div>
            </motion.div>

            {/* TypeScript */}
            <motion.div
              className="hero__skill hero__skill--ts"
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
                <BracketsCurly size={20} weight="duotone" />
                <span>TypeScript</span>
              </motion.div>
            </motion.div>

            {/* Responsive Design */}
            <motion.div
              className="hero__skill hero__skill--responsive"
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
                <DeviceMobile size={20} weight="duotone" />
                <span>Responsive</span>
              </motion.div>
            </motion.div>

            {/* Full Stack */}
            <motion.div
              className="hero__skill hero__skill--fullstack"
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
                <Stack size={20} weight="duotone" />
                <span>Full Stack</span>
              </motion.div>
            </motion.div>

            {/* Figma */}
            <motion.div
              className="hero__skill hero__skill--figma"
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
                <FigmaLogo size={20} weight="duotone" />
                <span>Figma</span>
              </motion.div>
            </motion.div>

            {/* Landing Pages */}
            <motion.div
              className="hero__skill hero__skill--landing"
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
                <Globe size={20} weight="duotone" />
                <span>Landing Pages</span>
              </motion.div>
            </motion.div>

            {/* Business Websites */}
            <motion.div
              className="hero__skill hero__skill--business"
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
                <Stack size={20} weight="duotone" />
                <span>Business Sites</span>
              </motion.div>
            </motion.div>

            {/* End-to-End */}
            <motion.div
              className="hero__skill hero__skill--endtoend"
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
                <PlugsConnected size={20} weight="duotone" />
                <span>End-to-End</span>
              </motion.div>
            </motion.div>

            {/* Modern Design */}
            <motion.div
              className="hero__skill hero__skill--modern"
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
                <PaintBucket size={20} weight="duotone" />
                <span>Modern Design</span>
              </motion.div>
            </motion.div>

            {/* Fast Delivery */}
            <motion.div
              className="hero__skill hero__skill--fast"
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
                <Lightning size={20} weight="duotone" />
                <span>Fast Delivery</span>
              </motion.div>
            </motion.div>

            {/* Client-Focused */}
            <motion.div
              className="hero__skill hero__skill--client"
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
                <DeviceMobile size={20} weight="duotone" />
                <span>Client-Focused</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
