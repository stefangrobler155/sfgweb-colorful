"use client";

import { motion } from "framer-motion";
import { FaCode, FaListAlt, FaCogs, FaCheck } from "react-icons/fa";
import { SERVICES } from "@/lib/site";
import { containerVariants, cardVariants, hoverLift } from "@/lib/motion";
import SectionHeader from "@/components/SectionHeader";

const ICONS = {
  code: FaCode,
  list: FaListAlt,
  cogs: FaCogs,
};

export default function Services() {
  return (
    <section id="services" className="py-12 text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="What we do"
          title="Websites built for"
          highlight="real small businesses"
          subtitle="You bring the content and brand basics. We handle structure, design, and technical delivery."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={hoverLift}
                className="group flex flex-col bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl p-10 hover:border-[var(--accent-color-5)] transition-all duration-500 h-full"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.accent} mb-8 text-white w-fit`}>
                  <Icon size={48} />
                </div>
                <h3 className="text-3xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-[17px] leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <FaCheck className="text-[var(--accent-color-1)] text-sm flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8 border-t border-[var(--primary-color)]">
                  <a
                    href="#contact"
                    className="text-[var(--accent-color-1)] hover:text-[var(--accent-color-5)] font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  >
                    Get a quote →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <p className="text-center text-gray-400 mt-10 max-w-2xl mx-auto">
          Standard websites are fixed-scope packages. Anything more advanced is scoped and quoted separately.
        </p>
      </div>
    </section>
  );
}
