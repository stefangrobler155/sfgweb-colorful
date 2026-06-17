"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--secondary-color)] border-t border-[var(--accent-color-1)]/20 text-[var(--text-light)] pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand & Bio */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[var(--accent-color-1)] mb-3">
                sfgweb.co.za
              </h3>
              <p className="text-[var(--text-color)] leading-relaxed max-w-md">
                I build high-performing websites that help businesses attract more clients and increase revenue. Let's work together to create a website that drives results for your business.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4 text-[var(--accent-color-1)]">Quick Links</h4>
            <ul className="space-y-2 text-[var(--text-color)]">
              <li><Link href="/" className="hover:text-[var(--accent-color-1)] transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-[var(--accent-color-1)] transition-colors">Services</Link></li>
              <li><Link href="#pricing" className="hover:text-[var(--accent-color-1)] transition-colors">Pricing</Link></li>
              <li><Link href="#why-me" className="hover:text-[var(--accent-color-1)] transition-colors">Why Me</Link></li>
              <li><Link href="#contact" className="hover:text-[var(--accent-color-1)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-4 text-[var(--accent-color-1)]">Get In Touch</h4>
            
            <div className="space-y-3 text-[var(--text-color)]">
              <p>
                Email: <a href="mailto:stefan@sfgweb.co.za" className="hover:text-[var(--accent-color-1)] transition-colors">stefan@sfgweb.co.za</a>
              </p>
              <p>
                Phone: <a href="tel:+27812345678" className="hover:text-[var(--accent-color-1)] transition-colors">+27 81 234 5678</a>
              </p>
            </div>

            {/* Social Icons */}
            {/* <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--accent-color-1)] transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--accent-color-1)] transition-colors">
                <FaGithub />
              </a>
              <a href="https://wa.me/27812345678" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--accent-color-1)] transition-colors">
                <FaWhatsapp />
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--accent-color-1)]/10 text-center text-xs text-[var(--text-color)]">
          <p>
            © {currentYear} sfgweb.co.za. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}