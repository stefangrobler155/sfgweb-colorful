"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-[var(--accent-color-2)]">Work</span>
          </h2>
          <p className="text-lg text-[var(--secondary-color)] max-w-2xl mx-auto">
            Real websites for real businesses — built to look great, load fast, 
            and help my clients get more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full group"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div 
                className="relative w-full h-64 cursor-pointer overflow-hidden"
                onClick={() => openModal(project.fullImage)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                  <FaSearchPlus className="text-white text-4xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-[var(--text-color)]">
                  {project.title}
                </h3>

                <p className="text-[var(--secondary-color)] leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3.5 rounded-xl bg-[var(--accent-color-1)] text-white font-medium hover:bg-black transition-all"
                  >
                    View Live Website →
                  </a>

                  <a
                    href="#contact"
                    className="block w-full text-center py-3.5 rounded-xl border border-[var(--accent-color-1)] text-[var(--accent-color-1)] font-medium hover:bg-[var(--accent-color-1)] hover:text-white transition-all"
                  >
                    Get a Similar Website
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-[var(--secondary-color)] mb-6">
            Want a website like these for your business?
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-black text-white text-lg rounded-2xl hover:bg-[var(--accent-color-1)] transition-colors"
          >
            Let's Talk About Your Project
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project preview"
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain rounded-xl"
              />
              <button
                className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full text-3xl flex items-center justify-center shadow-lg"
                onClick={closeModal}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}