"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Animated shapes */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-900 dark:to-pink-900 opacity-20 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-900 dark:to-indigo-900 opacity-20 blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800"
          >
            <Sparkles className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
              Reimagined UI Components
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400"
          >
            Build stunning websites with MotionUI
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300"
          >
            A modern UI component library powered by Next.js and Tailwind CSS
            with beautiful animations and dark mode support.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/components">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/20 dark:shadow-purple-900/30"
              >
                Explore Components
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <Link href="/custom-components">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                Custom Solutions
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Code preview mockup */}
        <motion.div
          variants={itemVariants}
          className="mt-20 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="bg-gray-900 p-4 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-gray-400 text-sm">component.jsx</div>
          </div>
          <div className="bg-gray-800 p-6 overflow-x-auto">
            <pre className="text-gray-300 font-mono text-sm">
              <code>{`import { motion } from "framer-motion";

export const Button = ({ children }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 rounded-full 
      bg-gradient-to-r from-purple-600 to-indigo-600
      text-white font-medium shadow-lg"
  >
    {children}
  </motion.button>
);`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
