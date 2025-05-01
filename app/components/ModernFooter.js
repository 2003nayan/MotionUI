"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Mail, Heart } from "lucide-react";

const ModernFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Components", href: "/components" },
        { name: "Pricing", href: "/pricing" },
        { name: "Docs", href: "/docs" },
        { name: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
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
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                MotionUI
                </span>
              </motion.div>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
              A modern UI component library for Next.js and Tailwind CSS with
              beautiful animations and dark mode support.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="https://github.com/2003nayan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com/NayanKatiyara"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="mailto:nayankatiyara03@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          {footerLinks.map((column, idx) => (
            <motion.div variants={itemVariants} key={idx}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} MotionUI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>by Nayan Katiyara</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ModernFooter;
