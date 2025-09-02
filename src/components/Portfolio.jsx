"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "WooCommerce + Next.js Store",
    image: "/projects/project1.jpg",
    tech: ["Next.js", "WooCommerce", "TailwindCSS"],
    link: "#",
    github: "https://github.com/yourusername/woocommerce-nextjs-store",
  },
  {
    title: "Custom WordPress Site",
    image: "/projects/project2.jpg",
    tech: ["WordPress", "Elementor", "PHP"],
    link: "#",
    github: "https://github.com/yourusername/custom-wordpress-site",
  },
  {
    title: "Portfolio Blog",
    image: "/projects/project3.jpg",
    tech: ["Next.js", "Headless WP", "Framer Motion"],
    link: "#",
    github: "https://github.com/yourusername/portfolio-blog",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 bg-[var(--primary-color)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-[var(--accent-color-2)]">Work</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full"
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
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
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
                </div>
                <div className="space-y-4">
                  <motion.a
                    href={project.link}
                    className="inline-block px-5 py-2 rounded-xl bg-[var(--accent-color-1)] text-white font-medium transition text-center w-full"
                    whileHover={{ scale: 1.05, backgroundColor: "#ff5722" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 rounded-xl bg-[var(--accent-color-3)] text-[var(--text-color)] font-medium transition text-center w-full"
                      whileHover={{ scale: 1.05, backgroundColor: "#c0d6e0" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View on GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}