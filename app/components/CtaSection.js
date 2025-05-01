"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 -z-10"></div>

      <motion.div
        className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-800 dark:to-purple-800 opacity-20 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-800 dark:to-pink-800 opacity-20 blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                Stay updated with our latest components
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 mb-6"
              >
                Subscribe to our newsletter and be the first to know about new
                components, features, and updates.
              </motion.p>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={18} />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight size={18} />
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600"></div>
              <div className="absolute inset-0 opacity-20 bg-pattern"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-purple-300" />
                    <p className="font-medium">Weekly component updates</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-purple-300" />
                    <p className="font-medium">Early access to new features</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-purple-300" />
                    <p className="font-medium">
                      Exclusive tutorials and guides
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-purple-300" />
                    <p className="font-medium">
                      Community support and resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
