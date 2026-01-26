import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./SocialProof.scss";

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "20+", label: "Products Launched" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="social-proof" ref={ref}>
      <div className="social-proof__container">
        <motion.div
          className="social-proof__stats"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="social-proof__stat"
              variants={statVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span
                className="social-proof__number"
                variants={numberVariants}
              >
                {stat.number}
              </motion.span>
              <span className="social-proof__label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
