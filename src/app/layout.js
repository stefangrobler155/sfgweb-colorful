import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Manrope } from 'next/font/google';
import "./globals.css";

export const metadata = {
  title: "SFGWEB",
  description: "Web Development",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,           // Explicit is better
  adjustFontFallback: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body 
        className="font-sans antialiased min-h-screen bg-local md:bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg_fixed.webp')" }}
      >
        <Navbar />
        <main className="flex flex-col pt-24 md:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}