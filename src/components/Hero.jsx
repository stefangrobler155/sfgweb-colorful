"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[var(--primary-color)]">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold text-[var(--text-color)]"
      >
        I build{" "}
        <span className="text-[var(--accent-color-1)]">custom frontends</span>{" "}
        with Next.js & WordPress
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-lg md:text-xl max-w-2xl text-[var(--secondary-color)]"
      >
        Hi, I’m Stefan. I help businesses build modern, scalable, and animated
        websites using Next.js, WordPress, and WooCommerce.
      </motion.p>

      {/* CTA */}
      <motion.a
        href="#services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 inline-block bg-[var(--accent-color-1)] text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-[var(--accent-color-5)] transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
