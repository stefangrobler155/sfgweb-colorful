import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { NAV_ITEMS, SITE } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = NAV_ITEMS.filter((item) => item.id !== "home");

  return (
    <footer className="bg-[var(--secondary-color)] border-t border-[var(--accent-color-1)]/20 text-[var(--text-light)] pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/#home" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt={`${SITE.name} Logo`}
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md">{SITE.tagline}</p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold mb-5 text-[var(--accent-color-1)]">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {footerLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="hover:text-[var(--accent-color-1)] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold mb-5 text-[var(--accent-color-1)]">Get a quote</h4>
            <div className="flex gap-5 text-3xl mb-10">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-color-1)] transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>Based in {SITE.location}</p>
              <p className="mt-1">Available for projects across South Africa</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--accent-color-1)]/10 text-center text-xs text-gray-400">
          <p>
            © {currentYear} {SITE.name}. All rights reserved.
            <span className="mx-2">•</span>
            Built with passion in South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
