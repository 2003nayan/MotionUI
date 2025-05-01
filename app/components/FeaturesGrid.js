"use client";

import { motion } from "framer-motion";
import { Code, Zap, Palette, Layers, Sparkles, Lightbulb } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Code />,
      title: "Developer Focused",
      description:
        "Built with developers in mind, offering clean code and easy customization options.",
      color:
        "from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600",
    },
    {
      icon: <Zap />,
      title: "Lightning Fast",
      description:
        "Optimized for performance with minimal bundle size and efficient rendering.",
      color:
        "from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600",
    },
    {
      icon: <Palette />,
      title: "Beautiful Design",
      description:
        "Carefully crafted components with attention to detail and modern aesthetics.",
      color: "from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-600",
    },
    {
      icon: <Layers />,
      title: "200+ Components",
      description:
        "Extensive library of UI components to build any type of web application.",
      color:
        "from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600",
    },
    {
      icon: <Sparkles />,
      title: "Animations Ready",
      description:
        "Built-in animations and transitions for creating engaging user experiences.",
      color:
        "from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-600",
    },
    {
      icon: <Lightbulb />,
      title: "Dark Mode Support",
      description:
        "Full dark mode support out of the box for all components and layouts.",
      color: "from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            Why Choose MotionUI?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A modern component library that combines the power of Next.js,
            Tailwind CSS, and Framer Motion
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl"
            >
              <div
                className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-r ${feature.color} text-white`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
