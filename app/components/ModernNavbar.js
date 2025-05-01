"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Github } from "lucide-react";

const ModernNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [starCount, setStarCount] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchRepoStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/gaurav-sarage/NextBlend"
        );
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };

    fetchRepoStars();
  }, []);

  const navigation = [
    { title: "How it Works", path: "/how-it-works" },
    { title: "Components", path: "/components" },
    { title: "Docs", path: "/docs" },
    { title: "Changelog", path: "/changelog" },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`sticky top-0 z-50 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <nav className="items-center px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="/images/MotionUI_logo.png"
              width={140}
              alt="MotionUI Logo"
              className="p-3"
            />
          </Link>
          <div className="flex items-center space-x-2 md:hidden">
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            //   onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button> */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-500 dark:text-gray-300 outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <motion.ul
          variants={navbarVariants}
          className={`flex-1 justify-between md:flex md:mt-0 ${
            mobileMenuOpen ? "block mt-4" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {navigation.map((item, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 dark:text-gray-200 font-medium"
              >
                <Link
                  href={item.path}
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
            <motion.div variants={itemVariants} className="hidden md:block">
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                // onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button> */}
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="https://github.com/gaurav-sarage/NextBlend"
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-900 text-white"
                >
                  <Github size={18} />
                  <span>Star {starCount || ""}</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default ModernNavbar;
