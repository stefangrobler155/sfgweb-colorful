"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaTrophy, FaHandshake } from "react-icons/fa";
import { REASONS } from "@/lib/site";
import { containerVariants, cardVariants, hoverLift } from "@/lib/motion";
import SectionHeader from "@/components/SectionHeader";

const ICONS = {
  check: FaCheckCircle,
  clock: FaClock,
  trophy: FaTrophy,
  handshake: FaHandshake,
};

export default function WhyMe() {
  return (
    <section id="why-me" className="py-12 text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="Why Work With Me"
          title="Built to Help Your Business"
          highlight="Grow"
          subtitle="I don’t just create websites — I create digital tools that attract clients and build trust."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {REASONS.map((reason) => {
            const Icon = ICONS[reason.icon];
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                whileHover={hoverLift}
                className="group bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl p-8 hover:border-[var(--accent-color-5)] transition-all duration-500 flex flex-col h-full"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.accent} mb-6 text-white w-fit transition-transform group-hover:scale-110`}>
                  <Icon size={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 leading-tight text-white">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-1">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
