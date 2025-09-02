"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[var(--secondary-color)] text-[var(--primary-color)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          Get in <span className="text-[var(--accent-color-2)]">Touch</span>
        </motion.h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-[var(--accent-color-3)] text-[var(--text-color)]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-[var(--accent-color-3)] text-[var(--text-color)]"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-[var(--accent-color-3)] text-[var(--text-color)]"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-[var(--accent-color-1)] text-white font-semibold"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}