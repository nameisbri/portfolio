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
        "Get a website that converts visitors into customers. Fast, mobile-friendly, and built to grow your business—from landing pages to full web applications.",
      icon: <Globe weight="duotone" />,
    },
    {
      id: "ios-app-development",
      title: "Mobile App Development",
      description:
        "Launch your app on the App Store and Play Store. I build native-feeling mobile apps with React Native that work beautifully on iOS and Android, delivered faster with modern development practices.",
      icon: <DeviceMobile weight="duotone" />,
    },
    {
      id: "product-design",
      title: "Product Design",
      description:
        "Turn your idea into a product users actually want. From user research to final designs, I create products that solve real problems and drive results.",
      icon: <PaintBrush weight="duotone" />,
    },
    {
      id: "ux-ui-design",
      title: "UX/UI Design",
      description:
        "Designs that work. I create intuitive interfaces that guide users to take action—increasing engagement and conversions.",
      icon: <Lightbulb weight="duotone" />,
    },
    {
      id: "ai-enhanced-development",
      title: "AI-Enhanced Development",
      description:
        "Faster delivery without sacrificing quality. I use AI tools to accelerate development, meaning you get your product sooner at competitive rates.",
      icon: <Robot weight="duotone" />,
    },
    {
      id: "full-product-lifecycle",
      title: "Full Product Lifecycle",
      description:
        "One person, complete solution. From concept to launch, I handle design and development so you can focus on your business.",
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
        Everything you need to bring your product idea to life. One person, complete solution—from design to App Store.
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
