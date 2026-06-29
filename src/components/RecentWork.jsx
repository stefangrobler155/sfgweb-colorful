"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Lezylrie French Bulldogs",
    category: "Local Business / WordPress",
    image: "/lfbd.webp", 
    url: "https://lezylriefrenchbulldogs.co.za/",
    description: "Built a clean, modern website for a local French Bulldog breeder. Includes puppy gallery, availability, FAQs, and contact forms. The client was very happy with the result and the ongoing support."
  },
  {
    title: "Annie's Irises",
    category: "E-Commerce / WooCommerce",
    image: "/annie.webp", 
    url: "https://anniesirises.com.au/",
    description: "Designed and developed an online store for a specialist bearded iris nursery. Features product catalogue, seasonal sales, important biosecurity notices, and a beautiful plant-focused design."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function RecentWork() {
  return (
    <section id="recent-work" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mt-3 text-white"
          >
            Recent <span className="text-[var(--accent-color-1)]">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Real results for real businesses. Here is a look at how we help companies grow online.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.url}
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice for external links
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-[var(--secondary-color)] rounded-3xl overflow-hidden border border-[var(--accent-color-1)] hover:border-[var(--accent-color-5)] transition-all duration-500 block"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                {/* The overlay effect - ONLY because these are real links */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-white px-6 py-2 rounded-full">
                    View Live Site ↗
                  </span>
                </div>
              </div>
              
              {/* Text */}
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