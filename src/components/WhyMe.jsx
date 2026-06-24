"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaTrophy, FaHandshake } from "react-icons/fa";

const reasons = [
  {
    icon: <FaCheckCircle size={48} />,
    title: "Results That Matter",
    // Changed: Tied it back to your main headline
    description: "Websites built to do more than just look good—designed to turn visitors into paying customers.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaClock size={48} />,
    title: "Fast Turnaround",
    // Changed: Fixed the timeline contradiction!
    description: "Don't wait months. Most projects are designed, built, and launched in under 2 weeks.",
    accent: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaTrophy size={48} />,
    title: "Modern & High Performance",
    // Kept as is, it's perfect.
    description: "Fast-loading websites optimized for speed, mobile devices, and search engines.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: <FaHandshake size={48} />,
    title: "Personal Local Support",
    // Kept as is, this is a HUGE selling point for SA clients.
    description: "Based in Free State, South Africa. Responsive, reliable, and easy to work with.",
    accent: "from-emerald-500 to-teal-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

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
          
          {/* Design Tweak: Made the heading pure white for maximum pop */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight mt-3 text-white"
          >
            Built to Help Your Business{" "}
            <span className="text-[var(--accent-color-1)]">Grow</span>
          </motion.h2>
          
          {/* Design Tweak: Added a muted color class for better readability */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto" // Changed from var(--text-light) to gray-400
          >
            I don’t just create websites — I create digital tools that attract clients and build trust.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.35, ease: "easeOut" }
              }}
              className="group bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl p-8 hover:border-[var(--accent-color-5)] transition-all duration-500 flex flex-col h-full"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.accent} mb-6 text-white w-fit transition-transform group-hover:scale-110`}>
                {reason.icon}
              </div>

              {/* Design Tweak: Made card headings white */}
              <h3 className="text-2xl font-semibold mb-3 leading-tight text-white">
                {reason.title}
              </h3>
              {/* Design Tweak: Made card body text slightly muted */}
              <p className="text-gray-400 leading-relaxed flex-1">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}