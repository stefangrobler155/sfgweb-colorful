"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center text-[var(--text-light)]');">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] xl:grid-cols-[58%_42%] md:gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[1.5px] md:tracking-[4px] text-[11px] md:text-sm font-semibold text-[var(--accent-color-1)]"
            >
              CUSTOM WEBSITES • ECOMMERCE • REDESIGNS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] text-[var(--text-light)] font-manrope"
            >
              Websites That Help You{" "}
              <span className="text-[var(--accent-color-1)]">Get More Customers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[var(--text-light)] max-w-xl"
            >
              Professional, fast-loading websites built for small businesses, service providers, and online stores.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[var(--accent-color-1)] hover:bg-[var(--accent-color-5)] text-[var(--text-light)] font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all text-center"
              >
                Get a Free Quote
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-[var(--accent-color-1)] text-[var(--text-light)] hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl transition-all text-center"
              >
                Services & Pricing
              </motion.a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-start md:justify-center pt-6 mb-8 md:pt-0 text-[var(--text-dark)]"
          >
            <div className="relative w-full max-w-100 lg:max-w-100">
              <Image
                src="/hero_img.webp"
                alt="Professional website example"
                width={520}
                height={580}
                className="rounded-3xl shadow-2xl w-full h-auto"
                priority
              />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="hidden sm:block absolute -top-6 -right-6 bg-[var(--accent-color-1)] text-[var(--text-light)] rounded-2xl shadow-xl px-5 py-3 text-sm font-medium whitespace-nowrap"
              >
                ⚡ Lightning-Fast Websites
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
                className="hidden sm:block absolute -bottom-6 -left-6 bg-[var(--accent-color-1)] text-[var(--text-light)] rounded-2xl shadow-xl px-5 py-3 text-sm font-medium whitespace-nowrap"
              >
                📱 Fully Responsive Design
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}