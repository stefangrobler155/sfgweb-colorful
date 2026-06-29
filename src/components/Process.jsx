"use client";
import { motion } from "framer-motion";
import { FaComments, FaFileAlt, FaPencilRuler, FaRocket } from "react-icons/fa";

const steps = [
  {
    step: "01",
    icon: <FaComments size={28} />,
    title: "Discovery & Planning",
    description: "We start with a quick call or detailed intake form. You share your goals, target audience, and existing assets. I help clarify what will make your website successful.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    icon: <FaFileAlt size={28} />,
    title: "Content & Foundation",
    description: "You provide the main content, photos, and logo (or we can arrange copywriting). You also secure your domain & hosting — I send a simple step-by-step guide.",
    accent: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    icon: <FaPencilRuler size={28} />,
    title: "Design & Build",
    description: "I design and build your site with strategic, goal-focused layouts. You'll review 2–3 options with my recommendations. We keep revisions focused and efficient (max 2 rounds).",
    accent: "from-amber-500 to-orange-500",
  },
  {
    step: "04",
    icon: <FaRocket size={28} />,
    title: "Launch & Handover",
    description: "After final approval, we launch your new website. I provide all login details and a simple training video so you can update content yourself.",
    accent: "from-emerald-500 to-teal-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,     // ← This creates the nice stagger
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Process() {
  return (
    <section id="process" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]"
          >
            Transparent Process
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-tight mt-3 text-white"
          >
            How We Work <span className="text-[var(--accent-color-1)]">Together</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A clear, efficient 4-step process designed to deliver great results with no surprises.
          </motion.p>
        </div>

        {/* Staggered Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative bg-[#1a1a1a] border border-[var(--accent-color-1)] hover:border-[var(--accent-color-5)] rounded-3xl p-8 transition-all duration-500 h-full flex flex-col"
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.35, ease: "easeOut" }
              }}
            >
              {/* Step Number */}
              <span className="absolute top-6 right-6 text-6xl font-extrabold text-white/5 select-none">
                {step.step}
              </span>

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.accent} mb-6 text-white w-fit transition-transform group-hover:scale-110`}>
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-white">
                {step.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed flex-1">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}