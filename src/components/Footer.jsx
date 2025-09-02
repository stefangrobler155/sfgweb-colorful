"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary-color)] text-[var(--primary-color)] py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h3 className="text-xl font-semibold text-[var(--accent-color-2)]">
            Stefan | SFG Web
          </h3>
          <p className="mt-1 text-sm text-[var(--accent-color-3)]">
            Frontend developer based in Cape Town, South Africa. Available for freelance projects.
          </p>
        </motion.div>
        <p className="text-sm text-[var(--accent-color-3)]">Email: stefan@sfgweb.com</p>
        <p className="text-xs text-[var(--accent-color-3)] mt-2">
          © 2025 Stefan | SFG Web. All rights reserved.
        </p>
      </div>
    </footer>
  );
}