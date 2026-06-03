"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaTrophy, FaHandshake } from "react-icons/fa";

const reasons = [
  {
    icon: <FaCheckCircle size={42} />,
    title: "Results That Matter",
    description: "Built to generate leads, increase trust, and support business growth.",
  },
  {
    icon: <FaClock size={42} />,
    title: "Fast Turnaround",
    description: "Most projects are completed in 2–4 weeks with regular updates and clear communication.",
  },
  {
    icon: <FaTrophy size={42} />,
    title: "Modern & High Performance",
    description: "Fast-loading websites optimized for speed, mobile devices, and search engines.",
  },
  {
    icon: <FaHandshake size={42} />,
    title: "Personal Local Support",
    description: "Based in Free State, South Africa. Responsive, reliable, and easy to work with.",
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-12 bg-[var(--secondary-color)] text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]"
          >
            WHY WORK WITH ME
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight mt-3"
          >
            Built to Help Your Business{" "}
            <span className="text-[var(--accent-color-1)]">Grow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-[var(--text-light)] text-lg max-w-2xl mx-auto"
          >
            I don’t just create websites — I create digital tools that attract clients and build trust.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[var(--secondary-color)] backdrop-blur-sm border border-[var(--accent-color-1)] rounded-3xl p-8 hover:border-[var(--accent-color-5)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[var(--accent-color-1)] mb-6 transition-transform group-hover:scale-110">
                {reason.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3 leading-tight">
                {reason.title}
              </h3>

              <p className="text-[var(--text-light)] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}