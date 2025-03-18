import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Loader.scss";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <div className="loader__content">
        <div className="loader__logo">
          <motion.div
            className="loader__icon"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
          >
            <div className="loader__circle"></div>
          </motion.div>
        </div>
        <motion.div
          className="loader__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span>G</span>
          <span>a</span>
          <span>b</span>
          <span>r</span>
          <span>i</span>
          <span>e</span>
          <span>l</span>
          <span>a</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
