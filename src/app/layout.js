import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorBlocks from "@/components/ColorBlocks";
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
    <html lang="en" className={`${inter.variable} ${manrope.variable} bg-[var(--secondary-color)]`}>
      <body className={`${inter.className} ${manrope.className}`}> 
        <Navbar />
        <main className="flex flex-col pt-24 md:pt-16">
          {children}
        </main>
        <Footer />
        {/* <ColorBlocks /> */}
      </body>
    </html>
  );
}