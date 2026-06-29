"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--secondary-color)] border-t border-[var(--accent-color-1)]/20 text-[var(--text-light)] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand & Bio */}
          <div className="md:col-span-5">
            <Link href="/#home" className="inline-block mb-6">
              <Image
                src="/sfg_clr-logo_1.svg"
                alt="SFGWeb Logo"
                width={180}
                height={60}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-[var(--text-color)] leading-relaxed max-w-md">
              I build fast, high-performing websites that help small businesses attract more clients and grow revenue.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-5 text-[var(--accent-color-1)]">Quick Links</h4>
            <ul className="space-y-3 text-[var(--text-color)]">
              <li><Link href="#services" className="hover:text-[var(--accent-color-1)] transition-colors">Services</Link></li>
              <li><Link href="#pricing" className="hover:text-[var(--accent-color-1)] transition-colors">Pricing</Link></li>
              <li><Link href="#process" className="hover:text-[var(--accent-color-1)] transition-colors">Our Process</Link></li>
              <li><Link href="#portfolio" className="hover:text-[var(--accent-color-1)] transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="hover:text-[var(--accent-color-1)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-5 text-[var(--accent-color-1)]">Connect With Me</h4>
            
            <div className="flex gap-5 text-3xl mb-10">
              {/* <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-color-1)] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a> */}
              <a 
                href="https://wa.me/27768740744" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-color-1)] transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              {/* <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-color-1)] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a> */}
            </div>

            <div className="text-sm text-[var(--text-color)]">
              <p>Based in Free State, South Africa</p>
              <p className="mt-1">Available for projects across South Africa</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--accent-color-1)]/10 text-center text-xs text-[var(--text-color)]">
          <p>
            © {currentYear} SFGWeb. All rights reserved. 
            <span className="mx-2">•</span>
            Built with passion in South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}