import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  DeviceMobile,
  PaintBrush,
  Lightbulb,
  Robot,
  Stack,
} from "@phosphor-icons/react";
import "./Services.scss";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  const services: Service[] = [
    {
      id: "website-development",
      title: "Website Development",
      description:
        "Modern, responsive web applications built with React, TypeScript, and best practices. From landing pages to complex web apps, I create fast, accessible, and scalable solutions.",
      icon: <Globe weight="duotone" />,
    },
    {
      id: "ios-app-development",
      title: "iOS App Development",
      description:
        "Native iOS applications built with React Native. I specialize in creating smooth, performant mobile experiences that feel native to iOS while leveraging cross-platform efficiency.",
      icon: <DeviceMobile weight="duotone" />,
    },
    {
      id: "product-design",
      title: "Product Design",
      description:
        "End-to-end product design from concept to launch. I combine user research, UX principles, and design thinking to create products that solve real problems and delight users.",
      icon: <PaintBrush weight="duotone" />,
    },
    {
      id: "ux-ui-design",
      title: "UX/UI Design",
      description:
        "User experience and interface design focused on usability, accessibility, and visual appeal. I create intuitive interfaces that guide users seamlessly through their journey.",
      icon: <Lightbulb weight="duotone" />,
    },
    {
      id: "ai-enhanced-development",
      title: "AI-Enhanced Development",
      description:
        "Leveraging AI tools like Cursor and Claude for efficient product development. I use extensive agent workflows and prompt engineering to accelerate the entire product lifecycle while maintaining quality.",
      icon: <Robot weight="duotone" />,
    },
    {
      id: "full-product-lifecycle",
      title: "Full Product Lifecycle",
      description:
        "Complete product development from initial concept through design, development, and launch. I handle every stage with AI-assisted workflows, ensuring efficient delivery without compromising on quality.",
      icon: <Stack weight="duotone" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="services" id="services" ref={ref}>
      <h2 className="section__heading">Services</h2>
      <p className="services__subtitle">
        I offer comprehensive product development services, from initial design
        concepts to fully functional applications. Whether you need a website, an
        iOS app, product design, or the complete product lifecycle, I bring
        technical expertise, design thinking, and AI-enhanced workflows to every
        project.
      </p>

      <motion.div
        className="services__grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="services__card"
            variants={itemVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <div className="services__icon">{service.icon}</div>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__description">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
