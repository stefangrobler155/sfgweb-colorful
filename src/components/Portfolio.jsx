"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Lumina Lens Studio - Headless WordPress & Next.js Website",
    image: "/projects/project1.jpg",
    description: "Developed a fully functional photography website using a headless WordPress backend with the ACF plugin and a Next.js frontend. Implemented custom API data fetching with TypeScript, designed responsive layouts with Tailwind CSS, and optimized performance with Turbopack. This project highlights skills in React, Next.js, WordPress integration, and modern web development practices.",
    tech: ["Next.js", "Wordpress", "Tailwind CSS", "TypeScript", "ACF", "Turbopack", "Framer Motion"],
    link: "https://lls-two.vercel.app/",
    github: "https://github.com/stefangrobler155/lls",
  },
  {
    title: "Brew & Beyond Blog - Headless WordPress & Next.js Blog",
    image: "/projects/project2.jpg",
    description: "Developed a fully functional blog using a headless WordPress backend and a Next.js React frontend. Learned to integrate WordPress API for dynamic content fetching, implemented responsive design with Tailwind CSS, and utilized Next.js features like SSG for performance.",
    tech: ["Next.js", "Tailwind CSS", "WordPress API", "Fetch API", "Framer Motion"],
    link: "https://bbblog-eight.vercel.app/",
    github: "https://github.com/stefangrobler155/bbblog",
  },
  {
    title: "ImageVault: Headless WooCommerce E-Commerce Demo",
    image: "/projects/project3.jpg",
    description: "A React-based frontend for a headless WordPress WooCommerce store, built to learn and demonstrate the e-commerce flow: browsing products, managing cart, checkout (with Cash on Delivery), order confirmation, and downloading virtual files. Focuses on integrating with the WP REST API for a decoupled architecture—backend handles data/security, frontend manages UI/state.",
    tech: ["React", "Headless WP", "WooCommerce", "REST API"],
    link: "https://download-store-gamma.vercel.app/",
    github: "https://github.com/stefangrobler155/download-store",
  }
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
              <div className="relative w-full h-70">
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
                    target="_blank"
                    rel="noopener noreferrer"
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