"use client";
import { motion } from "framer-motion";
import { FaCode, FaShoppingCart, FaRedo } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={48} />,
    title: "Custom Websites",
    description: "For service businesses that need more leads and credibility.",
    features: [
      "High-converting, professional designs",
      "Fast loading & mobile responsive",
      "Easy content management",
      "SEO optimized from day one",
    ],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaShoppingCart size={48} />,
    title: "E-Commerce Stores",
    description: "Online stores built to sell products and grow revenue.",
    features: [
      "Beautiful product showcases",
      "Secure checkout & payments",
      "WooCommerce or custom solutions",
      "Abandoned cart recovery & upsells",
    ],
    accent: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaRedo size={48} />,
    title: "Website Redesigns",
    description: "Transform outdated websites into modern, high-performing experiences.",
    features: [
      "Complete visual & technical upgrade",
      "Improved user experience & speed",
      "Better lead generation",
      "Modern branding refresh",
    ],
    accent: "from-amber-500 to-orange-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-[var(--secondary-color)] text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
                    <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mt-3"
          >
            Services That <span className="text-[var(--accent-color-1)]">Drive Results</span>
          </motion.h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            I build high-performing websites that help businesses attract more clients and increase revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl p-10 hover:border-[var(--accent-color-5)] transition-all duration-500 hover:-translate-y-2 h-full"
            >
              {/* Top Content */}
              <div className="flex-1">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.accent} mb-8 text-[var(--text-light)]`}>
                  {service.icon}
                </div>

                <h3 className="text-3xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-[17px] leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-[var(--accent-color-1)] text-xl leading-none flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Link - Always at the same position */}
              <div className="mt-auto pt-8 border-t border-[var(--primary-color)]">
                <a
                  href="#contact"
                  className="text-[var(--accent-color-1)] hover:text-[var(--accent-color-5)] font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Get a quote for this service →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}