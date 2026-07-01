"use client";
import { motion } from "framer-motion";
import { FaRocket, FaBuilding, FaCrown, FaShoppingCart } from "react-icons/fa";

const packages = [
  {
    icon: <FaRocket size={48} />,
    title: "Startup Site",
    price: "R4,000",
    period: "Once-off",
    description: "Perfect for startups, freelancers, and small businesses that need a professional online presence without the cost of a full custom website.",
    features: [
      "1-page website (up to 5 sections: Hero, About, Services, Testimonials, Contact)",
      "Mobile & Tablet Responsive Design",
      "WhatsApp Button + Contact Form",
      "Fast Loading Performance",
      "Up to 2 Minor Revision Rounds",
      "5-7 Days Delivery",
    ],
    accent: "from-blue-500 to-cyan-500",
    popular: false,
    buttonText: "Get Started", // <-- New
    // buttonLink: "/contact?package=startup" // <-- New
  },
  {
    icon: <FaBuilding size={48} />,
    title: "Business Site",
    price: "R7,000",
    period: "Once-off",
    description: "Ideal for growing businesses that need a professional website to build credibility and attract more qualified leads.",
    features: [
      "Up to 5 Professional Pages",
      "Mobile & Tablet Responsive Design",
      "Contact Form + WhatsApp Integration",
      "Blog Functionality",
      "Basic On-Page SEO Setup",
      "WordPress Editing Guide Included",
      "2 Revision Rounds Included",
      "7–10 Business Day Delivery",
    ],
    accent: "from-purple-500 to-pink-500",
    popular: true,
    buttonText: "Get in touch", 
    // buttonLink: "/contact?package=business"
  },
  {
    icon: <FaShoppingCart size={48} />,
    title: "Online Store",
    price: "R10,000",
    period: "From",
    description: "Perfect for businesses ready to sell online with a secure, scalable e-commerce store built for smooth customer checkout and future growth.",
    features: [
      "Up to 20 Products Loaded",
      "Mobile & Tablet Responsive",
      "Secure Payment Gateway Integration (PayFast / Yoco)",
      "Inventory & Shipping Setup",
      "Cart & Checkout Configuration",
      "Basic On-Page SEO Setup",
      "Fast Loading Performance",
      "1-on-1 Training Session Included",
      "2 Revision Rounds Included",
      "10–14 Business Day Delivery",
    ],
    note: "Final pricing depends on product count, product variations, shipping rules, and custom functionality.",
    accent: "from-emerald-500 to-teal-500",
    popular: false,
    buttonText: "Discuss My Store", 
    // buttonLink: "/contact?package=store" 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // smooth & premium feel
    },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 text-[var(--text-light)]">
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
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mt-3"
          >
            Affordable Packages That <span className="text-[var(--accent-color-1)]">Drive Growth</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Transparent pricing with no hidden fees. We take the hassle out of getting online, so you can focus on what you do best—running your business.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.35, ease: "easeOut" }
              }}
              className={`group relative flex flex-col bg-[var(--secondary-color)] border border-[var(--accent-color-1)] rounded-3xl p-8 hover:border-[var(--accent-color-5)] transition-all duration-500 h-full ${
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
                <span className="text-4xl font-bold">{pkg.price}</span>
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
                {pkg.note && (
                  <p className="text-sm text-zinc-400 mb-6">{pkg.note}</p>
                ) }
              {/* CTA */}
              <div className="mt-auto pt-6 border-t border-[var(--primary-color)]">
                <a
                  href="#contact"
                  className="block w-full text-center bg-[var(--accent-color-1)] hover:bg-[var(--accent-color-5)] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 group-hover:scale-[1.02]"
                >
                  {pkg.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <p className="text-center text-sm text-gray-400 mt-8 max-w-2xl mx-auto">
          * <span className="text-white font-medium">Hosting & Domain Not Included:</span> To ensure full ownership of your website, clients purchase their own domain and hosting. We provide a simple step-by-step guide on exactly what to buy and help you get set up.

        </p>
        <p className="text-center text-zinc-400 mt-10 text-sm">
          Need something custom? <a href="#contact" className="text-[var(--accent-color-1)] hover:underline">Let’s discuss your project</a>
        </p>
      </div>
    </section>
  );
}