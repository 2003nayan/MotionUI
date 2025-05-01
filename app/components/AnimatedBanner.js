"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const AnimatedBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-900 dark:via-violet-900 dark:to-indigo-900"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8">
        <motion.p
          className="font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 2,
            }}
            className="inline-block"
          >
            ✨ MotionUI 2.0 is here! Explore our new components and features ✨
          </motion.span>
        </motion.p>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={() => setIsVisible(false)}
      >
        <X size={18} />
      </motion.button>
    </motion.div>
  );
};

export default AnimatedBanner;
