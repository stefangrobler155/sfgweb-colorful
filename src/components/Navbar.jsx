"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[var(--primary-color)] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-[var(--text-color)]"
        >
          SFG Web
        </motion.div>
        <div className="flex gap-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-[var(--text-color)] hover:text-[var(--accent-color-1)] transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}