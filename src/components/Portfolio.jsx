"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import { FaSearchPlus } from "react-icons/fa";

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

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
              <div className="relative w-full h-64 cursor-pointer" onClick={() => openModal(project.fullImage)}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--secondary-color)] opacity-30 hover:opacity-80 transition-opacity flex items-center justify-center">
                  <FaSearchPlus className="text-white text-4xl opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-semibold mb-3 hover:text-[var(--accent-color-1)] transition cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-[var(--text-color)] mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <Link href={`/projects/${project.slug}`} className="text-[var(--accent-color-1)] hover:underline">
                    Read More
                  </Link>
                  <div className="flex flex-wrap gap-2 justify-center mb-4 mt-4">
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
                    whileHover={{ scale: 1.05, backgroundColor: "var( --accent-color-2)"  }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 rounded-xl bg-[var(--accent-color-5)] text-[var(--text-color)] font-medium transition text-center w-full"
                      whileHover={{ scale: 1.05, backgroundColor: "var(--accent-color-4)" }}
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

      {/* Modal for full image */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full h-full max-w-[80vw] max-h-[80vh] p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full project image"
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}