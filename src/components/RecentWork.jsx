"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/lib/site";
import { containerVariants } from "@/lib/motion";
import SectionHeader from "@/components/SectionHeader";

const projectCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RecentWork() {
  return (
    <section id="recent-work" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title="Recent"
          highlight="Work"
          subtitle="Real results for real businesses. Here is a look at how we help companies grow online."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.a
              key={`${project.title}-${project.category}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={projectCardVariants}
              whileHover={{ y: -8 }}
              className="group bg-[var(--secondary-color)] rounded-3xl overflow-hidden border border-[var(--accent-color-1)] hover:border-[var(--accent-color-5)] transition-all duration-500 block"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-white px-6 py-2 rounded-full">
                    View Live Site ↗
                  </span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[var(--accent-color-1)] text-sm font-semibold mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
