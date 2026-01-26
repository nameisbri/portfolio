import { motion } from "framer-motion";
import { Strategy, PaintBrush, Rocket } from "@phosphor-icons/react";
import "./Process.scss";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy & Roadmapping",
      description:
        "We define your MVP, user flows, and business goals to ensure we build what the market actually wants.",
      icon: <Strategy weight="duotone" />,
    },
    {
      number: "02",
      title: "Rapid Prototyping & Design",
      description:
        "I create high-fidelity UI/UX designs so you can 'feel' the product before we write a single line of code.",
      icon: <PaintBrush weight="duotone" />,
    },
    {
      number: "03",
      title: "AI-Enhanced Development",
      description:
        "Using a modern tech stack and AI-assisted workflows, I build and deploy your product with 2x the speed and 100% of the quality.",
      icon: <Rocket weight="duotone" />,
    },
  ];

  return (
    <section className="process" id="process">
      <div className="process__container">
        <h2 className="section__heading">A Seamless Path to Launch</h2>
        <p className="process__subtitle">
          My proven 3-step framework takes you from concept to market faster than traditional agencies, without compromising on quality.
        </p>

        <div className="process__steps">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process__step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="process__step-number">{step.number}</div>
              <div className="process__step-icon">{step.icon}</div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
