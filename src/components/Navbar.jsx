"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Why Me", href: "#why-me", id: "why-me" },
    { name: "Recent Work", href: "#recent-work", id: "recent-work" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Improved Scroll Handler with delay for mobile
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    // Close menu first
    setIsOpen(false);

    if (element) {
      // Small delay to let menu close
      setTimeout(() => {
        const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
        const offset = navbarHeight - 10; // Adjust for some spacing

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setActiveSection(targetId);
      }, 350); // 350ms delay
    }
  };

  // Scroll Spy
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

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[var(--secondary-color)]/95 text-[var(--text-light)] shadow-lg backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-3 group" onClick={(e) => handleNavClick(e, "#home")}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Image
              src="/sfg_clr-logo_1.svg"
              alt="SFGWEB Logo"
              width={160}
              height={50}
              className="h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-medium transition-colors relative py-1 group cursor-pointer
                ${activeSection === item.id ? "text-[var(--accent-color-1)]" : "text-white hover:text-[var(--accent-color-1)]"}`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--accent-color-1)] transition-all duration-300 group-hover:w-full" />
              {activeSection === item.id && (
                <motion.span layoutId="active-underline" className="absolute -bottom-1 left-0 h-0.5 w-full bg-[var(--accent-color-1)]" />
              )}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-2xl p-2 hover:text-[var(--accent-color-1)] transition" onClick={toggleMenu}>
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
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-4 px-4 text-lg font-medium rounded-lg transition-all
                    ${activeSection === item.id ? "text-[var(--accent-color-1)] bg-white/10" : "hover:bg-white/10"}`}
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