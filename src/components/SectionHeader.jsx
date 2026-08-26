"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, highlight, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold tracking-tight mt-3 text-white"
      >
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-[var(--accent-color-1)]">{highlight}</span>
          </>
        ) : null}
      </motion.h2>

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
