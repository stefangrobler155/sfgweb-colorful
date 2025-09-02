"use client";

import { motion } from "framer-motion";

const colors = [
  "var(--accent-color-1)",
  "var(--accent-color-2)",
  "var(--accent-color-3)",
  "var(--accent-color-4)",
  "var(--accent-color-5)",
];

export default function ColorBlocks({ height = "h-8" }) {
  return (
    <div className={`flex w-full ${height}`}>
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="flex-1"
          style={{ backgroundColor: color }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
}
