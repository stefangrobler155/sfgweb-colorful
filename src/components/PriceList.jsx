"use client";

import { motion } from "framer-motion";
import { FaRocket, FaBuilding, FaShoppingCart } from "react-icons/fa";
import { PACKAGES } from "@/lib/site";
import { containerVariants, cardVariants, hoverLift } from "@/lib/motion";
import SectionHeader from "@/components/SectionHeader";

const ICONS = {
  rocket: FaRocket,
  building: FaBuilding,
  cart: FaShoppingCart,
};

export default function PriceList() {
  return (
    <section id="pricing" className="py-12 text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Affordable Packages That"
          highlight="Drive Growth"
          subtitle="Transparent pricing with no hidden fees. We take the hassle out of getting online, so you can focus on what you do best—running your business."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PACKAGES.map((pkg) => {
            const Icon = ICONS[pkg.icon];
            return (
              <motion.div
                key={pkg.title}
                variants={cardVariants}
                whileHover={hoverLift}
                className={`group relative flex flex-col bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl p-8 hover:border-[var(--accent-color-5)] transition-all duration-500 h-full ${
                  pkg.popular ? "ring-2 ring-[var(--accent-color-1)]" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-[var(--accent-color-1)] text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pkg.accent} mb-6 text-[var(--text-light)] w-fit`}>
                  <Icon size={48} />
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-zinc-400 ml-2">{pkg.period}</span>
                </div>

                <h3 className="text-3xl font-semibold mb-3">{pkg.title}</h3>
                <p className="text-zinc-400 text-[17px] leading-relaxed mb-8">{pkg.description}</p>

                <ul className="space-y-3 mb-10 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-[var(--accent-color-1)] text-xl leading-none flex-shrink-0 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.note && <p className="text-sm text-zinc-400 mb-6">{pkg.note}</p>}

                <div className="mt-auto pt-6 border-t border-[var(--primary-color)]">
                  <a
                    href="#contact"
                    className="block w-full text-center bg-[var(--accent-color-1)] hover:bg-[var(--accent-color-5)] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 group-hover:scale-[1.02]"
                  >
                    {pkg.buttonText}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="text-center text-sm text-gray-400 mt-8 max-w-2xl mx-auto">
          * <span className="text-white font-medium">Hosting & Domain Not Included:</span> To ensure full ownership of your website, clients purchase their own domain and hosting. We provide a simple step-by-step guide on exactly what to buy and help you get set up.
        </p>
        <p className="text-center text-zinc-400 mt-10 text-sm">
          Need something custom?{" "}
          <a href="#contact" className="text-[var(--accent-color-1)] hover:underline">
            Let's discuss your project
          </a>
        </p>
      </div>
    </section>
  );
}
