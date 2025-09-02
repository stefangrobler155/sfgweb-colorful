"use client";

import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";
import ColorBlocks from "./ColorBlocks";

const services = [
  {
    icon: <FaCode size={36} />,
    title: "Frontend Development",
    items: ["Next.js", "Headless WordPress", "WooCommerce"],
  },
  {
    icon: <FaPaintBrush size={36} />,
    title: "Design & Experience",
    items: ["UI/UX Design", "Interactive Animations", "Responsive Layouts"],
  },
  {
    icon: <FaRocket size={36} />,
    title: "Brand & Growth",
    items: ["Optimization", "SEO Best Practices", "Conversion Strategy"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[var(--secondary-color)] text-[var(--primary-color)] relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          My <span className="text-[var(--accent-color-2)]">Services</span>
        </motion.h2>

        {/* Service Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[var(--accent-color-3)] text-[var(--text-color)] shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4 text-[var(--accent-color-1)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
