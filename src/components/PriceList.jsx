"use client";
import { motion } from "framer-motion";
import { FaRocket, FaBuilding, FaCrown, FaShoppingCart } from "react-icons/fa";

const packages = [
  {
    icon: <FaRocket size={48} />,
    title: "Bronze",
    price: "R1,950",
    period: "Once-off",
    description: "Perfect for startups and personal brands needing a strong online presence.",
    features: [
      "1-Page Website (5 sections)",
      "Mobile & Tablet Responsive",
      "WhatsApp + Contact Form",
      "Free .co.za Domain",
      "7 Days Delivery",
    ],
    accent: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    icon: <FaBuilding size={48} />,
    title: "Silver",
    price: "R3,750",
    period: "Once-off",
    description: "Ideal for small businesses ready to attract more clients.",
    features: [
      "5-Page Professional Website",
      "Blog Functionality",
      "Basic SEO Setup",
      "Easy WordPress Content Editing",
      "Everything in Bronze +",
      "7-8 Days Delivery",
    ],
    accent: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    icon: <FaCrown size={48} />,
    title: "Gold",
    price: "R7,500",
    period: "Once-off",
    description: "For established businesses wanting a premium online experience.",
    features: [
      "8-10 Page Website",
      "Advanced SEO & Analytics",
      "Newsletter Integration",
      "Speed Optimisation",
      "Everything in Silver +",
      "10 Days Delivery",
    ],
    accent: "from-amber-500 to-orange-500",
    popular: false,
  },
  {
    icon: <FaShoppingCart size={48} />,
    title: "eCommerce",
    price: "R5,250",
    period: "From",
    description: "Online stores built to sell and scale.",
    features: [
      "5+ Page Online Store",
      "Unlimited Products",
      "Payment Gateway Integration",
      "Advanced SEO",
      "Client Training",
      "Everything in Silver +",
    ],
    accent: "from-emerald-500 to-teal-500",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-[var(--secondary-color)] text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mt-3"
          >
            Affordable Packages That <span className="text-[var(--accent-color-1)]">Drive Growth</span>
          </motion.h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All packages include Next.js performance and headless WordPress ease.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative flex flex-col bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl p-8 hover:border-[var(--accent-color-5)] transition-all duration-500 hover:-translate-y-2 h-full ${
                pkg.popular ? "ring-2 ring-[var(--accent-color-1)]" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-[var(--accent-color-1)] text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pkg.accent} mb-6 text-[var(--text-light)] w-fit`}>
                {pkg.icon}
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold">{pkg.price}</span>
                <span className="text-zinc-400 ml-2">{pkg.period}</span>
              </div>

              <h3 className="text-3xl font-semibold mb-3">{pkg.title}</h3>
              <p className="text-zinc-400 text-[17px] leading-relaxed mb-8">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--accent-color-1)] text-xl leading-none flex-shrink-0 mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-6 border-t border-[var(--primary-color)]">
                <a
                  href="#contact"
                  className="block w-full text-center bg-[var(--accent-color-1)] hover:bg-[var(--accent-color-5)] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 group-hover:scale-[1.02]"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-zinc-400 mt-10 text-sm">
          Need something custom? <a href="#contact" className="text-[var(--accent-color-1)] hover:underline">Let’s discuss your project</a>
        </p>
      </div>
    </section>
  );
}