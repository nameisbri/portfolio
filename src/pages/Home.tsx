import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Experience from "../components/sections/Experience";
import Tech from "../components/sections/Tech";
import Projects from "../components/sections/Projects";

const Home = () => {
  return (
    <motion.main
      id="main-content"
      className="app__content"
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Experience />
      <Tech />
      <Projects />
    </motion.main>
  );
};

export default Home;

