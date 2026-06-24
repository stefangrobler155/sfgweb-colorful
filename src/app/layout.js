import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Manrope } from 'next/font/google';
import "./globals.css";

export const metadata = {
  title: "SFGWEB",
  description: "Web Development",
};

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',    
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-manrope',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body id="home" className={`${inter.className} ${manrope.className} min-h-screen bg-local md:bg-fixed bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: "url('/bg_fixed.webp')",
          // Optional: Add dark overlay
          // backgroundImage: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/bg_fixed.jpg')",
        }}> 
        <Navbar />
        <main className="flex flex-col pt-24 md:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}