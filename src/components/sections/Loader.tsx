import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Loader.scss";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
      },
    },
  };

  const bracketVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.15,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    }),
  };

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <motion.div
        className="loader__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="loader__code-container">
          {}
          <motion.div
            className="loader__bracket loader__bracket--open"
            variants={bracketVariants}
          >
            {"<"}
          </motion.div>

          {}
          <motion.div className="loader__name" variants={bracketVariants}>
            GB
          </motion.div>

          {}
          <motion.div
            className="loader__bracket loader__bracket--close"
            variants={bracketVariants}
          >
            {"/>"}
          </motion.div>
        </div>

        {}
        <div className="loader__dots">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="loader__dot"
              custom={i}
              variants={dotVariants}
            />
          ))}
        </div>

        {}
        <motion.div
          className="loader__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Loading Experience
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
