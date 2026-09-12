"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    setIsOpen(false);

    if (!element) return;

    setTimeout(() => {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - (navbarHeight - 10);
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(targetId);
    }, 350);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        let highestScore = -1;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const score = entry.intersectionRatio + (entry.boundingClientRect.top > 0 ? 0 : 1);
            if (score > highestScore) {
              highestScore = score;
              mostVisible = entry.target.id;
            }
          }
        });

        if (mostVisible) setActiveSection(mostVisible);
      },
      { rootMargin: "-90px 0px -45% 0px", threshold: [0.1, 0.4, 0.6] }
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[var(--secondary-color)] text-[var(--text-light)] shadow-lg backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-3 group" onClick={(e) => handleNavClick(e, "#home")}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3">
            <Image
              src="/sfg_300.png"
              alt={`${SITE.name} Logo`}
              width={160}
              height={60}
              className="h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
            <h3 className="text-[var(--text-light)] text-sm md:text-xl font-semibold tracking-wide transition-transform group-hover:scale-105">
              {SITE.brand}
            </h3>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-medium transition-colors relative py-1 group cursor-pointer ${
                activeSection === item.id
                  ? "text-[var(--accent-color-5)]"
                  : "text-white hover:text-[var(--accent-color-2)]"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--accent-color-2)] transition-all duration-300 group-hover:w-full" />
              {activeSection === item.id && (
                <motion.span layoutId="active-underline" className="absolute -bottom-1 left-0 h-0.5 w-full bg-[var(--accent-color-5)]" />
              )}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="bg-[var(--accent-color-1)] hover:bg-[var(--accent-color-5)] text-white font-semibold px-5 py-2 rounded-xl transition-colors"
          >
            {SITE.cta}
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-2xl p-2 hover:text-[var(--accent-color-1)] transition"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--secondary-color)] border-t border-white/10"
          >
            <div className="flex flex-col py-6 px-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-4 px-4 text-lg font-medium rounded-lg transition-all ${
                    activeSection === item.id
                      ? "text-[var(--accent-color-1)] bg-white/10"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-3 text-center bg-[var(--accent-color-1)] text-white font-semibold py-4 px-4 rounded-xl"
              >
                {SITE.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
