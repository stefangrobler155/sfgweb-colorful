"use client";

import { motion } from "framer-motion";
import { FaComments, FaFileAlt, FaPencilRuler, FaRocket } from "react-icons/fa";
import { PROCESS_STEPS } from "@/lib/site";
import { containerVariants, cardVariants, hoverLift } from "@/lib/motion";
import SectionHeader from "@/components/SectionHeader";

const ICONS = {
  comments: FaComments,
  file: FaFileAlt,
  pencil: FaPencilRuler,
  rocket: FaRocket,
};

export default function Process() {
  return (
    <section id="process" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="How it works"
          title="From first conversation"
          highlight="to launch"
          subtitle="A clear four-step process. Client delays, missing content, or out-of-scope requests can extend the timeline."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PROCESS_STEPS.map((step) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                className="group relative bg-[#1a1a1a] border border-[var(--accent-color-1)] hover:border-[var(--accent-color-5)] rounded-3xl p-8 transition-all duration-500 h-full flex flex-col"
                whileHover={hoverLift}
              >
                <span className="absolute top-6 right-6 text-6xl font-extrabold text-white/5 select-none">
                  {step.step}
                </span>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.accent} mb-6 text-white w-fit transition-transform group-hover:scale-110`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-1">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
