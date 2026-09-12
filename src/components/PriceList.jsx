"use client";

import { motion } from "framer-motion";
import { FaRocket, FaBuilding, FaBriefcase } from "react-icons/fa";
import { PACKAGES, SITE } from "@/lib/site";
import { containerVariants, cardVariants, hoverLift } from "@/lib/motion";
import SectionHeader from "@/components/SectionHeader";

const ICONS = {
  rocket: FaRocket,
  building: FaBuilding,
  briefcase: FaBriefcase,
};

export default function PriceList() {
  return (
    <section id="packages" className="py-12 text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Packages"
          title="Straightforward pricing for"
          highlight="standard websites"
          subtitle="Three clear options for most small businesses. Hosting and domain are separate so you keep ownership of your online presence."
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
                    Most popular
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

                <div className="mt-auto pt-6 border-t border-[var(--primary-color)]">
                  <a
                    href="#contact"
                    className="block w-full text-center bg-[var(--accent-color-1)] hover:bg-[var(--accent-color-5)] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 group-hover:scale-[1.02]"
                  >
                    {SITE.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold mb-3">Custom development</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Ecommerce, booking systems, dashboards, API integrations, headless WordPress/WooCommerce, and other non-standard work — quoted individually, not forced into a fixed package.
          </p>
          <a
            href="#contact"
            className="inline-block bg-transparent border border-[var(--accent-color-1)] hover:bg-[var(--accent-color-1)] text-white font-semibold py-3 px-8 rounded-2xl transition-colors"
          >
            {SITE.cta}
          </a>
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-sm text-gray-400 space-y-2 text-center">
          <p>
            <span className="text-white font-medium">Domain:</span> you register and own it; we help connect it.
          </p>
          <p>
            <span className="text-white font-medium">Hosting:</span> sites are deployed on Vercel; hosting is separate from the build price.
          </p>
          <p>
            <span className="text-white font-medium">Email:</span> separate from the website.
          </p>
          <p>
            <span className="text-white font-medium">Revisions:</span> one organised feedback round within the agreed scope. Extra work is quoted.
          </p>
          <p>
            <span className="text-white font-medium">Timeline:</span> typically 5–10 business days after all content, assets, and information are received.
          </p>
          <p className="pt-4">
            Website Care from R150/month — hosting attention, basic monitoring, and technical support after launch. Not unlimited design changes.
          </p>
        </div>
      </div>
    </section>
  );
}
