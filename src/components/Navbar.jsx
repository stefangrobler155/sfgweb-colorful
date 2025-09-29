"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" }, // Changed to absolute path
    { name: "Portfolio", href: "/#portfolio" }, // Changed to absolute path
    { name: "Contact", href: "/#contact" }, // Changed to absolute path
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-[var(--primary-color)] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[var(--text-color)]"
        >
          <Link href="/">
          <Image src="/logo.png" alt="SFGWeb Logo" width={60} height={60} className="inline-block mr-2" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-[var(--text-color)] hover:text-[var(--accent-color-1)] transition font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--text-color)] hover:text-[var(--accent-color-1)] transition"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--primary-color)] border-t border-[var(--accent-color-3)]"
          >
            <div className="flex flex-col items-center py-4">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="py-2 text-[var(--text-color)] hover:text-[var(--accent-color-1)] transition font-medium"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}