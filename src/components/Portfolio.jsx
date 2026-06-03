"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {projects} from "../data/projects"; 

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 bg-[var(--secondary-color)] text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]"
          >
            RECENT WORK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mt-3"
          >
            Projects That Delivered{" "}
            <span className="text-[var(--accent-color-1)]">Real Results</span>
          </motion.h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl overflow-hidden hover:border-[var(--accent-color-5)] transition-all duration-500 hover:-translate-y-2 h-full"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[var(--accent-color-1)] text-[var(--text-light)] text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-light)] flex-1">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-800">
                  <Link
                    href={project.link}
                    className="text-[var(--accent-color-1)] hover:text-[var(--accent-color-5)] font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Live Preview →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--accent-color-1)] hover:text-[var(--accent-color-5)] font-medium"
          >
            Want similar results for your business? Let's talk →
          </a>
        </div>
      </div>
    </section>
  );
}