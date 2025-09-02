"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ColorBlocks from "./ColorBlocks";

const projects = [
  {
    title: "WooCommerce + Next.js Store",
    image: "/projects/project1.jpg",
    tech: ["Next.js", "WooCommerce", "TailwindCSS"],
    link: "#",
  },
  {
    title: "Custom WordPress Site",
    image: "/projects/project2.jpg",
    tech: ["WordPress", "Elementor", "PHP"],
    link: "#",
  },
  {
    title: "Portfolio Blog",
    image: "/projects/project3.jpg",
    tech: ["Next.js", "Headless WP", "Framer Motion"],
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-20 bg-[var(--primary-color)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-[var(--accent-color-2)]">Work</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0} // Prioritize the first image for LCP
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--accent-color-3)] text-[var(--text-color)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-5 py-2 rounded-xl bg-[var(--accent-color-1)] text-white font-medium hover:bg-orange-600 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
