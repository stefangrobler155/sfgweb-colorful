"use client";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaRocket, FaShoppingCart } from "react-icons/fa";
import { SiHeadlessui, SiWoocommerce } from "react-icons/si";
import { RiCoinsFill } from "react-icons/ri";

const services = [
  {
    icon: <FaCode size={36} />,
    title: "Custom Website Development",
    items: [
      "Modern websites built with Next.js & React",
      "Headless WordPress integration",
      "Fast, responsive Tailwind CSS designs",
      "Easy-to-manage content systems"
    ],
  },
  {
    icon: <FaShoppingCart size={38} />,
    title: "E-Commerce & Online Stores",
    items: [
      "Professional WooCommerce stores",
      "Headless WooCommerce storefronts",
      "Secure checkout & payment integration",
      "Product showcases with great photography"
    ],
  },
  {
    icon: <FaRocket size={36} />,
    title: "Performance & SEO Optimization",
    items: [
      "Lightning-fast loading speeds",
      "Excellent Google Core Web Vitals scores",
      "SEO-friendly structure & content",
      "Mobile-first responsive design"
    ],
  },
  {
    icon: <SiHeadlessui size={36} />,
    title: "Headless WordPress Solutions",
    items: [
      "Modern headless WordPress websites",
      "Advanced Custom Fields (ACF) integration",
      "Powerful content management systems",
      "Future-proof & highly flexible websites"
    ],
  },
  {
    icon: <FaPaintBrush size={36} />,
    title: "Design & User Experience",
    items: [
      "Clean, professional & conversion-focused design",
      "Smooth animations & interactions",
      "User-friendly navigation",
      "Accessible & trustworthy websites"
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[var(--secondary-color)] text-[var(--primary-color)] relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Services That <span className="text-[var(--accent-color-2)]">Deliver Results</span>
        </motion.h2>

        <p className="text-center mt-4 text-lg text-[var(--secondary-color)] max-w-2xl mx-auto">
          From beautiful online stores to fast business websites — built to grow your business.
        </p>

        {/* Service Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[var(--accent-color-3)] text-[var(--text-color)] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 text-[var(--accent-color-1)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-5">{service.title}</h3>
              
              <ul className="space-y-2.5 list-disc list-inside text-[15px] marker:text-[var(--accent-color-1)]">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}