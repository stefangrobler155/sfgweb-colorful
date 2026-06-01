"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[var(--navbar-height)] min-h-screen flex items-center bg-[var(--primary-color)] py-100 md:py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] xl:grid-cols-[62%_38%] gap-10 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[3px] text-sm font-semibold text-[var(--accent-color-1)]"
            >
              CUSTOM WEBSITES • ECOMMERCE • REDESIGNS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-[var(--text-color)] font-manrope"
            >
              Websites That Help You{" "}
              <span className="text-[var(--accent-color-1)]">Get More Customers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[var(--secondary-color)] max-w-xl"
            >
              Professional, fast-loading websites built for small businesses, service providers, and online stores.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[var(--accent-color-1)] hover:bg-[var(--accent-color-5)] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all text-center"
              >
                Get a Free Quote
              </motion.a>

              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-[var(--accent-color-1)] text-[var(--text-color)] hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl transition-all text-center"
              >
                View My Work
              </motion.a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end pt-6 md:pt-0"
          >
            <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
              <Image
                src="/placeholder.png"
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
                className="hidden sm:block absolute -top-6 -right-6 bg-white dark:bg-[var(--accent-color-4)] rounded-2xl shadow-xl px-5 py-3 text-sm font-medium whitespace-nowrap"
              >
                ⚡ Blazing Fast
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
                className="hidden sm:block absolute -bottom-6 -left-6 bg-white dark:bg-[var(--accent-color-3)] rounded-2xl shadow-xl px-5 py-3 text-sm font-medium whitespace-nowrap"
              >
                📱 Fully Responsive
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}