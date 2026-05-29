"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[var(--primary-color)]">
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-7xl font-extrabold text-[var(--text-color)]"
    >
      I build fast, high-converting websites{" "}
      <span className="text-[var(--accent-color-1)]">that grow businesses</span>
    </motion.h1>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="mt-6 text-lg md:text-xl max-w-2xl text-[var(--secondary-color)]"
    >
      WordPress • WooCommerce • Headless Next.js • Tailwind CSS
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="mt-4 text-lg md:text-xl max-w-2xl text-[var(--secondary-color)]"
    >
      Specialising in beautiful e-commerce stores and professional business websites 
      that are fast, easy to manage, and built to last.
    </motion.p>

      {/* CTA */}
      <motion.a
        href="#portfolio"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 inline-block bg-[var(--accent-color-1)] text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-[var(--accent-color-5)] transition"
        aria-label="View my services and portfolio"
      >
        View My Work
      </motion.a>
    </section>
  );
}
